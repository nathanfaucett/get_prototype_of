var tape = require("tape"),
    getPrototypeOf = require("../src/index");


tape("getPrototypeOf(object) should return the prototype of the passed object", function(assert) {
    var proto, object;

    proto = {
        key: "value"
    };

    function F() {
        this.constructor = F;
    }
    F.prototype = proto;

    object = new F();

    assert.equal(getPrototypeOf(object), proto);

    assert.end();
});
