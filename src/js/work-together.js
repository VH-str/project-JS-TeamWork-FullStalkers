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

  // Закриття модального вікна за кліком на backdrop
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  // Закриття модального вікна за кліком на кнопку
  closeModalButton.addEventListener('click', closeModal);

  // Обробка форми
  form.addEventListener('submit', async event => {
    event.preventDefault();

    // Отримання значень з форми
    const email = form.querySelector('#try-agen').value.trim();
    const message = form.querySelector('#client_comment').value.trim();

    // Перевірка на заповненість полів
    if (!email || !message) {
      iziToast.error({
        title: 'Error',
        message: 'Please fill in all required fields.',
        position: 'topRight',
      });
      return;
    }

    try {
      // Відправлення запиту на сервер
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comment }),
      });

      // Перевірка відповіді сервера

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to send the request. Please try again.'
        );
      }

      // Успішна відповідь сервера
      const result = await response.json();
      console.log('Success:', result);

      // Відображення модального вікна
      iziToast.success({
        title: 'Success',
        message: 'Your message was sent successfully!',
        position: 'topRight',
      });
      openModal();

      // Очищення форми
      form.reset();
    } catch (error) {
      // Повідомлення про помилку
      iziToast.error({
        title: 'Error',
        message: error.message || 'Something went wrong. Please try again.',
        position: 'center',
      });
      console.error('Error:', error);
    }
  });
  // Слухаємо клавішу Escape
  document.addEventListener('keydown', handleEscape);
});

