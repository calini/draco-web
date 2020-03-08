YARN      = yarn

DOCKER  = docker
COMPOSE  = docker-compose
TAG     = calini/draco-web:dev

run:
	$(YARN) start

build:
	$(YARN) build

docker:
	$(DOCKER) build -t $(TAG) .

compose-up:
	$(COMPOSE) up -d