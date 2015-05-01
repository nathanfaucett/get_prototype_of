var isObject = require("is_object"),
    isNative = require("is_native");


var nativeGetPrototypeOf = Object.getPrototypeOf;


module.exports = getPrototypeOf;


function getPrototypeOf(obj) {
    return obj == null ? null : nativeGetPrototypeOf(
        (isObject(obj) ? obj : Object(obj))
    );
}

if (!isNative(nativeGetPrototypeOf)) {
    nativeGetPrototypeOf = function getPrototypeOf(obj) {
        return obj.__proto__ || (
            obj.constructor ? obj.constructor.prototype : null
        );
    };
}
