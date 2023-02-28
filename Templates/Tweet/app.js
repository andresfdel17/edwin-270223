"use strict";
const textChars = document.getElementById("textChars");
const leftChars = document.getElementById("leftChars");
const TOTALCHARS = 250;
textChars === null || textChars === void 0 ? void 0 : textChars.addEventListener("keyup", (e) => {
    var _a, _b;
    const left = TOTALCHARS - ((_a = textChars === null || textChars === void 0 ? void 0 : textChars.value) === null || _a === void 0 ? void 0 : _a.length);
    const leftText = `Quedan ${left} caracteres`;
    if (left <= 50)
        leftChars.style.color = "red";
    if (left > 50)
        leftChars.style.color = "black";
    leftChars.textContent = leftText;
    if (left <= 0) {
        alert("Se quedó sin caracteres");
        textChars.value = (_b = textChars === null || textChars === void 0 ? void 0 : textChars.value) === null || _b === void 0 ? void 0 : _b.substring(0, 249);
    }
});
//# sourceMappingURL=app.js.map