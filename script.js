document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.textContent = 'Submitted';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1400);
    });
  });

  const productButtons = document.querySelectorAll('.product-card button');
  productButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
