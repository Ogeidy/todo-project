FROM python:3.8.6

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