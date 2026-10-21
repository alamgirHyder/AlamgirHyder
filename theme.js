(() => {
  let preference;
  try { preference = localStorage.getItem('portfolio-theme'); } catch (_) {}
  const dark = preference ? preference === 'dark' : true;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
