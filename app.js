const container = document.getElementById('container');
container.style.border="2px #2171ff solid";
container.style.width="640px";
container.style.display="flex";
const arr = [];//An array of 16x16 divs
for (let i = 0; i < 16; i++) {
    const x = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.style.width = "36px";
        square.style.height = "36px";
        square.style.background = "white";
        square.style.margin="0";
        square.style.padding="0";
        square.style.border = "2px #212121 solid";
        x.appendChild(square);
    }
    arr.push(x);
}
for (let i = 0; i < 16; i++) {
    container.appendChild(arr[i]);
}
