/* pill modals */

const pillModuls = document.querySelectorAll('.pill');

pillModuls.forEach(pill => {
  const modal = pill.querySelector('.modal');
  
  pill.addEventListener('mouseenter', () => {
    modal.classList.add('show')
  });
  
  pill.addEventListener('mouseleave', () => {
    modal.classList.remove('show')
  });
});

/* custom cursor */

const customCursor = document.querySelector('.cursor')

const moveCursor = (e) =>{
    const mouseY = e.clientY
    const mouseX = e.clientX

    customCursor.style.left = `${mouseX}px`
    customCursor.style.top = `${mouseY}px`
}

window.addEventListener('mousemove', moveCursor)

/* cursor events */

const hoverElement = document.querySelectorAll('a, .pill, .accesibility') 

hoverElement.forEach(el =>{
    el.addEventListener('mouseenter', () =>{
        customCursor.classList.add('el-hover')
    })

    el.addEventListener('mouseleave', () =>{
        customCursor.classList.remove('el-hover')
    })
})

const workImages = document.querySelectorAll('.work__img')

workImages.forEach(img =>{
    img.addEventListener('mouseenter', () =>{
        customCursor.classList.add('img-hover')
    })

    img.addEventListener('mouseleave', () =>{
        customCursor.classList.remove('img-hover')
    })
})

/* accesibilty show */

const accesibilityIcon = document.querySelector('.accesibility-icon')
const accesibilityModal = document.querySelector('.accesibility-modal')

accesibilityIcon.addEventListener('click', () =>{
    console.log('clicked')
    accesibilityModal.classList.toggle('show')
})

function closeModal() {
  document.querySelector('.accesibility-modal').classList.remove('show');
}


/* dark mode */

const darkModeCheckbox = document.querySelector('.accesibility-modal #night_mode-checkbox');

if (darkModeCheckbox) {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeCheckbox.checked = true;
  }

  darkModeCheckbox.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  });
}

const customCursorCheckbox = document.querySelector('.accesibility-modal #cursor-checkbox');
const pointerEls = document.querySelectorAll('a, label, .work__img');

customCursorCheckbox.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('default-cursor');
    document.querySelector('.cursor').classList.add('default-cursor');
    pointerEls.forEach(el => el.classList.add('default-cursor'));
  } else {
    document.body.classList.remove('default-cursor');
    document.querySelector('.cursor').classList.remove('default-cursor');
    pointerEls.forEach(el => el.classList.remove('default-cursor'));
  }
});


