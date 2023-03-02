const textArea = <HTMLTextAreaElement>document.getElementById("textArea");
function capitalizeWord(word: string): string {
    return word[0].toUpperCase() + word.substring(1)
}

function mayusc2minus(): void {
    textArea.value = textArea.value.toLowerCase();
}

function minus2mayusc(): void {
    textArea.value = textArea.value.toUpperCase();
}

function ucwords(): void {
    const words: string[] = textArea.value.split(" ");
    textArea.value = words.map(word => word.toLowerCase() && capitalizeWord(word)).join(" ");
}