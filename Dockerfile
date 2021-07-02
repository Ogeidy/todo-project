FROM python:3.8.6 as base

WORKDIR /project

RUN apt-get update \
    && apt-get install -y postgresql postgresql-contrib libpq-dev python3-dev

RUN pip3 install --upgrade pip

COPY manage.py requirements.txt ./
COPY projects/ projects/
COPY todo/ todo/
COPY users/ users/

RUN pip3 install -r requirements.txt

COPY wait-for-postgres.sh .
RUN chmod +x wait-for-postgres.sh



FROM base as development

CMD bash -c "./wait-for-postgres.sh db \
      && python manage.py migrate \
      && python manage.py create_initial_users \
      && python manage.py runserver 0.0.0.0:8080"



FROM base as production

RUN pip3 install gunicorn

CMD bash -c "./wait-for-postgres.sh db \
      && python manage.py migrate \
      && python manage.py create_initial_users \
      && gunicorn todo.wsgi -b 0.0.0.0:8080"