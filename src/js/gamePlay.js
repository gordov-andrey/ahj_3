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
      if (score.bot === 5) {
        alert(`Гамовер!`);
        location.reload();
      }
    }
  });
  insertRandom();
  botScore.innerText = `БОТ: ${score.bot++}`;
}

tbody.addEventListener('click', (e) => {
    if (e.target.id === 'img') {
      userScore.innerText = `Игрок: ${score.user++}`;
      if (score.bot > 0) {
        botScore.innerText = `БОТ: ${score.bot--}`;
  
      }
    }
})