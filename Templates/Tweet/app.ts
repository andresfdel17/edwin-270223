const textChars = <HTMLTextAreaElement>document.getElementById("textChars");
const leftChars: any = document.getElementById("leftChars");
const TOTALCHARS = 250;

textChars?.addEventListener("keyup", (e: any) => {
    const left = TOTALCHARS - textChars?.value?.length;
    const leftText = `Quedan ${left} caracteres`;
    if(left <= 50) leftChars.style.color = "red";
    if(left > 50) leftChars.style.color = "black";
    leftChars.textContent = leftText;
    if(left <= 0){
        alert("Se quedó sin caracteres");
    }
})