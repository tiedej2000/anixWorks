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
