const container = document.getElementById('container');
container.style.border = "2px #2171ff solid";
container.style.display = "flex";
container.style.width = `640px`;
let arr = [];//An array of divs
function makeGrid(gridSize=16) {
    const boxSize = (640 - (gridSize * 4)) / gridSize;
    arr = [];
    for (let i = 0; i < gridSize; i++) {
        const x = document.createElement('div');
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.style.width = `${boxSize}px`;
            square.style.height = `${boxSize}px`;
            square.style.backgroundColor = "white";
            square.style.margin = "0";
            square.style.padding = "0";
            square.style.border = "2px #212121 solid";
            square.setAttribute('id', `${j}-${i}`);
            x.appendChild(square);
        }
        arr.push(x);
    }
    for (let i = 0; i < gridSize; i++) {
        container.appendChild(arr[i]);
    }
}

function reset(gridSize=16) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const element = document.getElementById(`${j}-${i}`);
            element.style.backgroundColor = "white";
        }
    }
}

function myFunc1(gridSize=16) {
    console.log(container.childElementCount);
    if(container.childElementCount>0){
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
    }
    makeGrid(gridSize);
    function randomColorSelection() {
        const randomColor = Math.trunc(Math.random() * 256);
        return randomColor;
    }

    function colorDiv(e) {
        let event = e.target.id;
        if (Number.isInteger(Number(event[0]))) {
            e.target.style.backgroundColor = `rgb(${randomColorSelection()},${randomColorSelection()},${randomColorSelection()})`;
        }
    }

    container.addEventListener('mouseover', colorDiv);
}

function myFunc2(e) {
    let event = e.target.id;
    let gridSize = document.getElementById('grid-size').value;
    if (gridSize === "") {
        gridSize = 16;
    }
    if (gridSize < 16 || gridSize > 100) {
        alert("Grid Size should be from 16 to 100");
    } else if (gridSize >= 16 && gridSize <= 100) {
        if (event === 'submit') {
            myFunc1(gridSize);
        } else if (event === 'reset') {
            reset(gridSize);
        }
    }
}

window.addEventListener('click', myFunc2);