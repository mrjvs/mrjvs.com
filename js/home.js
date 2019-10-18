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
