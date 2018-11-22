// Unpacks two-dimensional array into html table
export var tm = function (csv) {
    var htmlDoc = '';
    csv.forEach(function (element) {
        var row = '';
        element.forEach(function (innerElem) {
            row += "<td>" + innerElem + "</td>";
        });
        htmlDoc += '<tr>' + row + '</tr>';
    });
    return "<table>" + htmlDoc + "</table>";
};
