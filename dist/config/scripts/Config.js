"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scripts = void 0;
exports.scripts = {
    build: {
        tsc: {
            clear: 'tsc --build --clean',
            clean: 'yarn build:tsc:clear && yarn build:tsc:noargs',
            noargs: 'tsc'
        }
    },
    test: 'ts-node ./test/index'
};
//# sourceMappingURL=Config.js.map