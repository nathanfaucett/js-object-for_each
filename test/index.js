var tape = require("tape"),
    objectForEach = require("..");


tape("objectForEach(object, callback) executes a provided function once per object element", function(assert) {
    var count = 0;

    objectForEach([0, 1, 2, 3, 4], function() {
        count += 1;
    });

    assert.equals(count, 5);
    assert.end();
});
