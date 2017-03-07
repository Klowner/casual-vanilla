all: lib/casual-vanilla.js lib/casual-vanilla.min.js

lib/casual-vanilla.js: node_modules
	npm run build

lib/casual-vanilla.min.js: node_modules
	npm run buildmin

clean:
	rm lib/*.js

.PHONY: all clean
