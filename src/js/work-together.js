import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { comment } from 'postcss';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.wt-form');
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  const closeModalButton = document.querySelector('.close-button-modal');

  const API_URL = 'https://portfolio-js.b.goit.study/api/requests';

  // Відкриття модального вікна
  function openModal() {
    backdrop.classList.add('is-open');
  }

  // Закриття модального вікна
  function closeModal() {
    backdrop.classList.remove('is-open');
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

    const email = form.querySelector('#user-email').value.trim();
    const message = form.querySelector('#user-message').value.trim();

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
      console.log('Success:', result);

      // Відкриваємо модальне вікно
      openModal();

      // Очищуємо форму
      form.reset();
    } catch (error) {
      // Повідомлення про помилку
      alert(`Error: ${error.message}`);
    }
  });

  // Слухаємо клавішу Escape
  document.addEventListener('keydown', handleEscape);
});
