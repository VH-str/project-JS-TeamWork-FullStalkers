import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { comment } from 'postcss';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.input-info');
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal-message');
  const closeModalButton = document.querySelector('.modal-close-btn');
  const API_URL = 'https://portfolio-js.b.goit.study/api/requests';

  // Відкриття модального вікна
  function openModal(result) {
    modal.innerHTML = `<h3 class="modal-title">${result.title}</h3><p class="modal-text">${result.message}</p>`;
    backdrop.classList.remove('is-hidden-back');
  }

  // Закриття модального вікна
  function closeModal() {
    backdrop.classList.add('is-hidden-back');
  }

  // Закриття модального вікна по Escape
  function handleEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  // Закриття по кліку на backdrop
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  // Закриття по кліку на кнопку закриття
  closeModalButton.addEventListener('click', closeModal);

  // Обробка форми
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const email = form.querySelector('#try-agen').value.trim();
    const message = form.querySelector('#client_comment').value.trim();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comment }),
      });

      if (!response.ok) {
        throw new Error('Failed to send the request. Please try again.');
      }

      // Якщо запит успішний
      const result = await response.json();
      // console.log('Success:', result);

      // Відкриваємо модальне вікно
      openModal(result);

      // Очищуємо форму
      form.reset(result);
    } catch (error) {
      // Повідомлення про помилку
      // alert(`Error: ${error.message}`);
      iziToast.error({
        title: 'Error',
        message: error.message || 'Something went wrong. Please try again.',
        position: 'center',
      });
    }
  });

  // Слухаємо клавішу Escape
  document.addEventListener('keydown', handleEscape);
});
