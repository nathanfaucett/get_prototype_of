var isObject = require("is_object"),
    isNative = require("is_native"),
    isNullOrUndefined = require("is_null_or_undefined");


var nativeGetPrototypeOf = Object.getPrototypeOf,
    baseGetPrototypeOf;


module.exports = getPrototypeOf;


function getPrototypeOf(value) {
    if (isNullOrUndefined(value)) {
        return null;
    } else {
        return baseGetPrototypeOf(value);
    }
}

if (isNative(nativeGetPrototypeOf)) {
    baseGetPrototypeOf = function baseGetPrototypeOf(value) {
        if (isObject(value)) {
            return nativeGetPrototypeOf(value);
        } else {
            return nativeGetPrototypeOf(Object(value));
        }
    };
} else {
    if (isObject("".__proto__)) {
        baseGetPrototypeOf = function baseGetPrototypeOf(value) {
            return value.__proto__ || null;
        };
    } else {
        baseGetPrototypeOf = function baseGetPrototypeOf(value) {
            return value.constructor ? value.constructor.prototype : null;
        };
    }
}
