const customCursor = document.getElementById('custom-cursor')

const moveCursor = (e) =>{
    const mouseY = e.clientY
    const mouseX = e.clientX

    customCursor.style.left = `${mouseX}px`
    customCursor.style.top = `${mouseY}px`
}
window.addEventListener('mousemove', moveCursor)

document.addEventListener('mousedown', () => customCursor.classList.add('clicked'));
document.addEventListener('mouseup',   () => customCursor.classList.remove('clicked'));


customElements.whenDefined('model-viewer').then(() => {
    document.querySelectorAll('model-viewer').forEach((mv) => {
        const style = document.createElement('style');
        style.textContent = '.userInput, canvas { cursor: none !important; }';
        mv.shadowRoot.appendChild(style);
    });
});


window.onload = customCursor.classList.remove('clicked')