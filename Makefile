# Makefile

install: #ejecutar el comando para clonar el repositorio por primera vez
	npm install ci

brain-games: #Ejecutar el juego sin necesidad de una instalacion global
	 node bin/brain-games.js

publish: #Ejecutar comando publish
	npm publish --dry-run

lint: npx eslint .

.PHONY: brain-even

brain-even:  node_modules
	node bin/brain-even.js

brain-calc:  node_modules
	node bin/brain-calc.js

