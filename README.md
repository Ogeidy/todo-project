# todo-project

## Local deploy

For development:
```bash
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build
```


For production:
```bash
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up --build
```