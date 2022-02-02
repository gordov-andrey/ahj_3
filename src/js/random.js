export default function getRandom(max) {
    const arr = [];
    let randomA = Math.floor(Math.random() * max);
    
    while (randomA === arr[0]) {
      randomA = Math.floor(Math.random() * max);
    }
    arr[0] = randomA;
    return randomA;
  }