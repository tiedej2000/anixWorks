const mv = document.querySelector('model-viewer');

function showModel(el) {
    const model = el.dataset.model;
    if (!model) return; 
    mv.setAttribute('src', model);
}

const items = [...document.querySelectorAll('.menu li')];
let index = 0;
items[index].classList.add('selected');

function setSelected(next) {
    items[index].classList.remove('selected');
    index = (next + items.length) % items.length; 
    items[index].classList.add('selected');
    showModel(items[index]);  
}

function uhOh() {
    document.body.classList.add('uh-oh');
    setTimeout(() => document.body.classList.remove('uh-oh'), 600);
}

function activate(el) {
    const href = el.dataset.href;
    if (el.id === 'disabled'){
        uhOh();
        return;
    }
    if(!href) return;
    if (el.dataset.external !== undefined) {
        window.open(href, '_blank');
    } else {
        window.location.href = href;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(index + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(index - 1); }
    else if (e.key === 'Enter') { activate(items[index]); }
});

items.forEach((el) => {
    el.addEventListener('click', () => activate(el));
    el.addEventListener('mouseenter', () => showModel(el));
    el.addEventListener('mouseenter', () => setSelected(items.indexOf(el)));
});