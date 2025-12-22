const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', () => {
  const formElements = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formElements));
});

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Gönderilen veriler:', {
    email: form.elements.email.value,
    message: form.elements.message.value,
  });

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
