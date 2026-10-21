document.querySelectorAll('nav a').forEach(link => { if (link.getAttribute('href') === location.pathname.split('/').pop()) link.setAttribute('aria-current', 'page'); });
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `${data.get('subject')} — ${data.get('name')}`;
  const body = `Hello Alamgeer,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`;
  location.href = `mailto:alamgeerhyder12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Email draft requested. If your email app did not open, contact alamgeerhyder12@gmail.com directly. Your message has not been sent by this site.';
});
