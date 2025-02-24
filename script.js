const container = document.querySelector(".container")
const containerWidth = document.querySelector(".container").clientWidth; 
console.log(containerWidth)

const button = document.querySelector("button")
let size = 16
button.addEventListener('click', () => {
    do {
        let gridSize = prompt("Please enter grid size: ") 
        size = gridSize
        console.log(size)
        if (size > 100) {
            alert("Please enter number smaller than 100")
        }
    }
    while (size > 100);   
    makeGrid(size)
}
)

function makeGrid(size) {
    container.innerHTML = ""
    for (let i=0; i < size * size; i++) {
        const squareBox = document.createElement("div")
        container.appendChild(squareBox)
        squareBox.setAttribute('class', 'grid')
        squareBox.style.width= containerWidth / size + "px";;
        squareBox.style.height= containerWidth / size + "px";;
    }
    const grid = document.querySelectorAll('.grid')
    for (i of grid) {
    i.addEventListener('mouseover', 
    //e => e.target.classList.add('changecolor')
    e => e.target.style.backgroundColor = getRandomColor()
    )
}  

}
makeGrid(size)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




