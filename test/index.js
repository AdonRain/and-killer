var ak = require('../index');
var obj = {
    a: {
        b: {
            c: 'foo'
        }
    }
};

var bar=ak(obj)('a.b.c');

//console.log(bar);

console.log(ak(obj)('a.d.c'));
