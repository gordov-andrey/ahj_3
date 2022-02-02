import getRandom from './random';
import img from '../img/goblin.png';

const icon = `<img src="${img}" alt="Catch!" id="img">`;
const score = {
    user: 0,
    bot: 0
  }
const userScore = document.querySelector('.user');
const botScore = document.querySelector('.bot');
const fields = document.querySelectorAll('.col');
const tbody = document.querySelector('tbody');

const insertRandom = () => {
    fields[getRandom(fields.length)].insertAdjacentHTML('beforeend', icon);
}

export function gamePlay() {
  fields.forEach((item) => {
    const img = item.querySelector('#img');
    if (img) {
      img.remove();
      botScore.innerText = `БОТ: ${score.bot}`;
      if (score.bot === 5) {
        userScore.innerHTML = `Игрок: ${score.user}`;
        botScore.innerHTML = `БОТ: ${score.bot}`;
        alert(`Гамовер! Cчет: ${score.user} : ${score.bot}`);
        score.user = 0;
        score.bot = 0;
      }
    }
  });
  insertRandom();
  score.bot++;
}

tbody.addEventListener('click', (e) => {
    if (e.target.id === 'img') {
      userScore.innerHTML = `Игрок: ${score.user++}`;
      if (score.bot > 0) {
        botScore.innerHTML = `БОТ: ${score.bot--}`;
  
      }
    }
})