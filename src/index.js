// import { Theme } from './js/task';
import './styles.css';
// import BSN from 'bootstrap.native';


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Для генерации случайного числа (индекс элемента массива цветов), используем функцию randomIntegerFromInterval.
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
let timerId = null;
let startIsActive = false;

refs.startBtn.addEventListener('click', () => {
  if (startIsActive) {return
  }
  startIsActive = true;
  timerId = setInterval(() => { colorSwitch(colors) }, 1000)
}
);

refs.stopBtn.addEventListener('click', () => {
  startIsActive = false;
  clearInterval(timerId)
});

const colorSwitch = (arrColors) => {
  const nowColor = arrColors[randomIntegerFromInterval(0, arrColors.length - 1)]
  addColor(nowColor)
}

const addColor =(color) => {
  refs.body.style.backgroundColor = color
}


console.log(timerId);
