"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const index_1 = require("../lib/index");
(0, ava_1.default)('should return empty string', function (t) {
    t.is((0, index_1.thousands)(''), '');
    t.is((0, index_1.thousands)(undefined), '');
});
(0, ava_1.default)('should allow integers', function (t) {
    t.is((0, index_1.thousands)(0), '0');
    t.is((0, index_1.thousands)(1), '1');
    t.is((0, index_1.thousands)(1234), '1,234');
    t.is((0, index_1.thousands)(1234567), '1,234,567');
});
(0, ava_1.default)('should allow negatives', function (t) {
    t.is((0, index_1.thousands)(-1), '-1');
    t.is((0, index_1.thousands)(-1234), '-1,234');
    t.is((0, index_1.thousands)(-1234567), '-1,234,567');
});
(0, ava_1.default)('should allow strings', function (t) {
    t.is((0, index_1.thousands)('1'), '1');
    t.is((0, index_1.thousands)('1000'), '1,000');
    t.is((0, index_1.thousands)('1000000'), '1,000,000');
});
(0, ava_1.default)('should not add commas to existing string', function (t) {
    t.is((0, index_1.thousands)('1,000'), '1,000');
    t.is((0, index_1.thousands)('1,000,000'), '1,000,000');
    t.is((0, index_1.thousands)('1,000.000'), '1,000.000');
});
(0, ava_1.default)('should allow decimals', function (t) {
    t.is((0, index_1.thousands)(1.23), '1.23');
    t.is((0, index_1.thousands)(1234.56), '1,234.56');
    t.is((0, index_1.thousands)(1234567.89), '1,234,567.89');
    t.is((0, index_1.thousands)(1234.5678), '1,234.5678');
});
(0, ava_1.default)('should allow custom delimiter', function (t) {
    t.is((0, index_1.thousands)(1234, ' '), '1 234');
    t.is((0, index_1.thousands)(1234567, ' '), '1 234 567');
});
//# sourceMappingURL=index.js.map