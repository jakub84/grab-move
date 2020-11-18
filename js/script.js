const container = document.querySelector('.box-container');
let mouseDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", () => {
    console.log("down")
})

container.addEventListener("mouseleave", () => {
    console.log("leave")
})

container.addEventListener("mouseup", () => {
    console.log("up")
})

container.addEventListener("mousemove", () => {
    console.log("move")
})