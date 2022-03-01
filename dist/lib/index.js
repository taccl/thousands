"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thousands = void 0;
function thousands(n, // number
s // separator
) {
    const p = ((n || n === 0 ? n : '') + '').split('.');
    if (p.length) {
        p[0] = p[0].replace(/(\d)(?=(\d{3})+\b)/g, '$1' + (s || ','));
    }
    return p.join('.');
}
exports.thousands = thousands;
;
//# sourceMappingURL=index.js.map