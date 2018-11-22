export var load = function () {
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
export var save = function () {
    console.log("Document saved!");
};
