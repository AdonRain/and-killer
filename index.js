module.exports = function(obj) {
    var copy = Object.assign({}, obj);
    return function(path) {
        var arr = path.split('.');
        return next(copy, arr);
    };
};

function next(obj, arr) {
    if (!arr.length) {
        return obj;
    } else if (!obj[arr[0]]) {
        return undefined;
    } else {
        obj = obj[arr[0]];
        arr.shift();
        return next(obj, arr);
    }
}
