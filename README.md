# Todo project

[![Website http://135.181.251.214](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)](http://135.181.251.214/)
![CD workflow](https://github.com/Ogeidy/todo-project/actions/workflows/cd.yaml/badge.svg)

![GitHub pull requests](https://img.shields.io/github/issues-pr/Ogeidy/todo-project)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/Ogeidy/todo-project)
![Lines of code](https://img.shields.io/tokei/lines/github/Ogeidy/todo-project)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Ogeidy/todo-project)


![Django Rest Framework](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)


## Local deploy

For development:
```bash
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build
```


For production:
```bash
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up --build
```