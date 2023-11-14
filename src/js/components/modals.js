import {disableScroll} from '../functions/disable-scroll';
import {enableScroll} from '../functions/enable-scroll';

let btns = document.querySelectorAll('.btn-modal');
const modals = document.querySelectorAll('.modal');
const modalsOverlay = document.querySelector('.modals__overlay');
const closeBtn = document.querySelectorAll('.modal__btn-close');



btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    disableScroll();
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalsOverlay.classList.add('modals__overlay--visible');
    document.body.classList.add('stop-scroll');
  })
})

modalsOverlay.addEventListener('click', (e) => {
  if(e.target === modalsOverlay) {
    modalsOverlay.classList.remove('modals__overlay--visible');
    modals.forEach((el) => {
      enableScroll();
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    })
  }
});

closeBtn.forEach((el) => {
  el.addEventListener('click', () => {
    enableScroll();
    modalsOverlay.classList.remove('modals__overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    })
  })
})
