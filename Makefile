DOCKER_COMP = docker compose -f docker-compose.dev.yml

.PHONY: up down logs shell dev build preview install lint format typecheck check

## —— Docker 🐳 ————————————————————————————————————————————————————————————————
up:
	$(DOCKER_COMP) up -d

down:
	$(DOCKER_COMP) down

logs:
	$(DOCKER_COMP) logs -f web

shell:
	$(DOCKER_COMP) exec web sh

## —— Setup ————————————————————————————————————————————————————————————————————
dev:
	npm run dev

install:
	npm install

## —— Build ————————————————————————————————————————————————————————————————————
build:
	npm run build

preview:
	npm run preview

## —— Qualité 🧪 ——————————————————————————————————————————————————————————————
lint:
	npm run lint

format:
	npm run format:write

typecheck:
	npm run ts:check

check:
	npm run ts:check && npm run lint && npm run format:check
