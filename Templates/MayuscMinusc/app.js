"use strict";
const textArea = document.getElementById("textArea");
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.substring(1);
}
function mayusc2minus() {
    textArea.value = textArea.value.toLowerCase();
}
function minus2mayusc() {
    textArea.value = textArea.value.toUpperCase();
}
function ucwords() {
    const words = textArea.value.split(" ");
    textArea.value = words.map(word => word.toLowerCase() && capitalizeWord(word)).join(" ");
}
//# sourceMappingURL=app.js.map