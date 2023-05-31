export const disableScrollingPage = () => {
  document.body.style.overflow = 'hidden';
  const { scrollY } = window;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
};

export const enableScrollingPage = () => {
  document.body.style.overflow = '';
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
