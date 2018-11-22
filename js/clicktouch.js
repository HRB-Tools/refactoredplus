export var clicktouch = function (querySelector, bindFunction) {
    var _querySelector = querySelector;
    var _function = bindFunction;
    document.querySelector(_querySelector).addEventListener('mousedown', function () {
        _function();
    });
    document.querySelector(_querySelector).addEventListener('touchstart', function () {
        _function();
    });
};
