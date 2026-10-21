(() => {
  let preference;
  try { preference = localStorage.getItem('portfolio-theme'); } catch (_) {}
  const dark = preference ? preference === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
