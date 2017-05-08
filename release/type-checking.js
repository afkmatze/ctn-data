"use strict";
exports.__esModule = true;
exports.CtnId = function (other) {
    return ('cuid' in other
        &&
            'string' === typeof other.cuid);
};
exports.CtnLocale = function (other) {
    return ('locale' in other
        &&
            'string' === typeof other.locale);
};
exports.CtnRevised = function (other) {
    return ('Rev' in other
        &&
            'string' === typeof other.Rev
        &&
            'timestamp' in other
        &&
            'number' === typeof other.timestamp
        &&
            exports.CtnId(other));
};
exports.CtnNested = function (other) {
    return ('children' in other
        &&
            Array.isArray(other.children)
        &&
            other.children.every(exports.CtnId));
};
//# sourceMappingURL=type-checking.js.map