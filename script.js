const container = document.querySelector(".container")
const containerWidth = document.querySelector(".container").clientWidth; 
console.log(containerWidth)

for (let i=0; i < 16*16; i++) {
    const squareBox = document.createElement("div")
    container.appendChild(squareBox)
    squareBox.setAttribute('class', 'grid')
    squareBox.style.width= containerWidth / 16 + "px";;
    squareBox.style.height= containerWidth / 16 + "px";;
}
