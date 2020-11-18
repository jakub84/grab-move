const container = document.querySelector('.box-container');
let mouseDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    startX = e.pageX - container.offsetLeft;
    console.log(startX);
    scrollLeft = container.scrollLeft;
    mouseDown = true;
    container.classList.add('active');
})

container.addEventListener("mouseleave", () => {
    console.log("leave");
    mouseDown = false;
    container.classList.remove('active');
})

container.addEventListener("mouseup", () => {
    console.log("up");
    mouseDown = false;
    container.classList.remove('active');
})

container.addEventListener("mousemove", (e) => {
    if(!mouseDown) return;
    
    console.log("moving");
    x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
})