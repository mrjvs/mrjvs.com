function updateToggle() {
    this.classList.toggle('on');
}

function registerClasses(className, func) {
    const nodeList = document.getElementsByClassName(className);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].onclick = func;
    }
}

registerClasses('toggle', updateToggle);

VanillaTilt.init(document.querySelectorAll(".perspective"), {
    max: 3,
    startX: 10,
    startY: -25,
    perspective: 800,
    speed: 400,
    gyroscope: false,
    scale: 0.9
});
