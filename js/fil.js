// Input: Column (-1, if all), value to search for, document (2-dimensional Array)
export var fil = function (spalte, expr, document) {
    var loop = false;
    var res = new Array();
    if (parseInt(spalte) < 1) {
        loop = true;
    }
    switch (loop) {
        case false:
            res = document.filter(function (row) { return row[parseInt(spalte) - 1] == expr; });
            break;
        case true:
            res = document.filter(function (row) { return row.includes(row.includes(expr) || row.includes('"' + expr + '"')); });
            break;
    }
    return res;
};
