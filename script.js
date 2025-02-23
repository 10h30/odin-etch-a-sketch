const container = document.querySelector(".container")
const containerWidth = document.querySelector(".container").clientWidth; 
console.log(containerWidth)

const button = document.querySelector("button")
button.addEventListener('click', () => {

    let gridSize = prompt("Please enter grid size: ")  
    makeGrid(gridSize)
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
makeGrid(16)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




