(function () {
    'use strict';

    var clicktouch = function (querySelector, bindFunction) {
        var _querySelector = querySelector;
        var _function = bindFunction;
        document.querySelector(_querySelector).addEventListener('mousedown', function () {
            _function();
        });
        document.querySelector(_querySelector).addEventListener('touchstart', function () {
            _function();
        });
    };

    var load = function () {
        var el = document.createElement("input");
        el.setAttribute('type', 'file');
        el.setAttribute('class', 'temporary');
        el.style.display = 'none';
        document.body.appendChild(el);
        return new Promise(function (resolve, reject) {
            var newReader = new FileReader();
            el.addEventListener('change', function () {
                newReader.readAsText(this.files[0]);
            });
            newReader.addEventListener('loadend', function () {
                var output = this.result;
                if (output !== '' && output !== undefined) {
                    resolve(output);
                }
                else {
                    reject('Empty document uploaded!');
                }
            });
            el.click();
        });
    };

    // Unpacks two-dimensional array into html table
    var tm = function (csv) {
        var htmlDoc = "";
        csv.forEach(function (element) {
            var row = "";
            element.forEach(function (innerElem) {
                row += "<td>" + innerElem + "</td>";
            });
            htmlDoc += "<tr>" + row + "</tr>";
        });
        return "<table>" + htmlDoc + "</table>";
    };

    // Input: Column (-1, if all), value to search for, document (2-dimensional Array)
    var fil = function (spalte, expr, document) {
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

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var csvDocument;
    var globalArg;
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var csvText, rows, csv;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, load()];
                    case 1:
                        csvText = _a.sent();
                        rows = csvText.split("\n");
                        csv = [];
                        rows.forEach(function (element) {
                            var row = element.split(";");
                            csv.push(row);
                        });
                        csvDocument = csv;
                        globalArg = csvDocument;
                        return [2 /*return*/];
                }
            });
        });
    }
    function display() {
        var divEl = document.createElement("div");
        divEl.style.overflow = "auto";
        divEl.innerHTML = tm(globalArg);
        document.body.appendChild(divEl);
    }
    function filter() {
        var spalte = prompt("Spalte: ");
        var expression = prompt("Wert: ");
        globalArg = fil(spalte, expression, globalArg);
        display();
        globalArg = csvDocument;
    }
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            clicktouch("#csv", main);
            clicktouch("#display", display);
            clicktouch("#filter", filter);
        }
    };

}());
