.PHONY: dev build preview install lint format typecheck check

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

install:
	npm install

lint:
	npm run lint

format:
	npm run format:write

typecheck:
	npm run ts:check

check:
	npm run ts:check && npm run lint && npm run format:check
