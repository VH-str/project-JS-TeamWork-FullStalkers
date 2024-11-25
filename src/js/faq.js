import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  
  const faqItems = document.querySelectorAll('.faq-item');

  const firstItem = faqItems[0];
  const firstAnswer = faqItems[0].querySelector('.faq-answer');
  const firstArrow = faqItems[0].querySelector('.faq-arrow');
  const firstQuestion = firstItem.querySelector('.faq-question');

  firstItem.classList.add('open');
  firstAnswer.classList.add('show');
  firstArrow.classList.add('open');  
  firstQuestion.classList.add('active');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.faq-arrow');

    // Обробник події для кнопки запитання
    questionButton.addEventListener('click', () => {
      toggleItem(item, answer, arrow, questionButton);
    });

    // Обробник події для стрілочки
    arrow.addEventListener('click', (event) => {
      event.stopPropagation(); // Запобігаємо спливанню події
      toggleItem(item, answer, arrow, questionButton);
    });
  });

  function toggleItem(item, answer, arrow, questionButton) {
    const isExpanded = answer.classList.contains('show');
    
    // Закриваємо всі елементи
    faqItems.forEach(i => {
      i.classList.remove('open'); 
      i.querySelector('.faq-answer').classList.remove('show');
      i.querySelector('.faq-arrow').classList.remove('open');
      i.querySelector('.faq-question').classList.remove('active'); 
    });

    // Відкриваємо або закриваємо поточний елемент
    if (!isExpanded) {
      item.classList.add('open');
      answer.classList.add('show');
      arrow.classList.add('open');
      questionButton.classList.add('active');
    }
  }
});