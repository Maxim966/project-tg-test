let btns = document.querySelectorAll('.btn-modal');
const modals = document.querySelectorAll('.modal');
const modalsOverlay = document.querySelector('.modals__overlay');
const modalsBlock = document.querySelectorAll('.modals');
const closeBtn = document.querySelectorAll('.modal__btn-close');


let fixBlocks = document.querySelectorAll('.fix-block');


let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
	let pagePosition = window.scrollY;
  fixBlocks.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	document.body.style.paddingRight = paddingOffset;
	document.body.classList.add('stop-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
  document.body.classList.remove('stop-scroll');
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  });
  document.body.style.paddingRight = '0px';
}


btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path')
    disableScroll();
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
    modalsOverlay.classList.add('modals__overlay--visible')
    document.body.classList.add('stop-scroll')
  })
})

modalsOverlay.addEventListener('click', (e) => {
  enableScroll();
  if(e.target === modalsOverlay) {
    modalsOverlay.classList.remove('modals__overlay--visible')
    modals.forEach((el) => {
      el.classList.remove('modal--visible')
      document.body.classList.remove('stop-scroll')
    })
  }
});

closeBtn.forEach((el) => {
  el.addEventListener('click', () => {
    modalsOverlay.classList.remove('modals__overlay--visible')
    modals.forEach((el) => {
      el.classList.remove('modal--visible')
      document.body.classList.remove('stop-scroll')
    })
  })
})
