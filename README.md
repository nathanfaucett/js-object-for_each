object-for_each
=======

executes a provided function once per object element.


```javascript
var objectForEach = require("@nathanfaucett/object-for_each");


objectForEach({
        a: "a",
        b: "b",
        c: "c"
    },
    function(value, key, object) {
        console.log(value, key, object);
    }
);
```
