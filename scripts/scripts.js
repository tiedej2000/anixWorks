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



/*mobile nav */

const navToggler = document.querySelector('.nav-toggler');
const navExpanded = document.querySelector('.nav-expanded')
    
navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('active')
  navExpanded.classList.toggle('show')
})

/* canvas code 
(() => {
    const c = document.getElementById('dots-canvas');
    if (!c) return;

    const ctx = c.getContext('2d');
    const DPR = 1; // lock to CSS pixels for consistent visual size across systems

    // Simple, tweakable params
    const SPACING = 10;   // px between dots
    const BASE = 1;     // base dot radius
    const MAX = 6.0;      // max radius near cursor
    const INFLUENCE = 42; // px influence radius

    const targetPointer = { x: 0, y: 0, active: false };
    const renderPointer = { x: 0, y: 0, active: false };
    const EASING = 0.4; // 0..1, higher = less lag

    // Cache dots color once so it doesn't change with theme
    function getCssVar(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }
    const DOT_COLOR = getCssVar('--dotsColor') || '#e4e4e4ff';

    function resize() {
        c.width = Math.max(1, Math.round(window.innerWidth));
        c.height = Math.max(1, Math.round(window.innerHeight));
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        draw();
    }

    function radiusAt(x, y) {
        if (!renderPointer.active) return BASE;
        const dx = renderPointer.x - x;
        const dy = renderPointer.y - y;
        const d = Math.hypot(dx, dy);
        if (d >= INFLUENCE) return BASE;
        const t = 1 - d / INFLUENCE;
        const ease = t * t * (3 - 2 * t); // smoothstep
        return BASE + (MAX - BASE) * ease;
    }

    function getCssVar(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function draw() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        ctx.clearRect(0, 0, w, h); // body background (white) shows through
        ctx.fillStyle = DOT_COLOR;
        for (let y = 0; y <= h; y += SPACING) {
            for (let x = 0; x <= w; x += SPACING) {
                ctx.beginPath();
                ctx.arc(x, y, radiusAt(x, y), 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    function setPointer(e) {
        targetPointer.x = e.clientX;
        targetPointer.y = e.clientY;
        targetPointer.active = true;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', (e) => { setPointer(e); });
    window.addEventListener('pointerleave', () => { targetPointer.active = false; });

    function animate() {
        // interpolate render pointer toward target
        const dx = targetPointer.x - renderPointer.x;
        const dy = targetPointer.y - renderPointer.y;
        renderPointer.x += dx * EASING;
        renderPointer.y += dy * EASING;
        renderPointer.active = targetPointer.active;
        draw();
        requestAnimationFrame(animate);
    }

    resize();
    animate();
})();

*/
