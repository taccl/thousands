export const scripts = {
	build: {
		tsc: {
			clear: 'tsc --build --clean',
			clean: 'yarn build:tsc:clear && yarn build:tsc:noargs',
			noargs: 'tsc'
		}
	},
	test: 'ts-node ./test/index'
};
