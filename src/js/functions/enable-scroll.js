import vars from '../_vars';

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fix-block');
  const body = document.body;
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  vars.bodyEl.style.paddingRight = '0px';

  vars.bodyEl.classList.remove('stop-scroll');
}
