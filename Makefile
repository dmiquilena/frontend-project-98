# Makefile

install: #ejecutar el comando para clonar el repositorio por primera vez
	npm install ci

brain-games: #Ejecutar el juego sin necesidad de una instalacion global
	 node bin/brain-games.js

publish: #Ejecutar comando publish
	npm publish --dry-run

lint: npx eslint .

.PHONY: brain-even

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js
