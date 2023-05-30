const root = document.getElementById("root");
const text = document.getElementById("text");
const sun = document.getElementById("sun");
const lune = document.getElementById("lune");
const switchContainer = document.getElementById("switch-container");
const radiusColor = '#FFFFFF15';
const sunWidth = getComputedStyle(sun, null).width;
const imageDay = document.getElementById("img-day");
const imageNigth = document.getElementById("img-nigth");

sun.addEventListener('click', () => {
  // Switch to Dark
  sun.classList.add('sun-dark');
  lune.classList.add('lune-dark');
  switchContainer.style.backgroundColor = '#151D28';
  root.style.backgroundColor = '#333333';
  imageDay.classList.add('img-day-dark');
  imageNigth.classList.add('img-nigth-dark');
  text.style.color = '#FFFFFF';
});

lune.addEventListener('click', ()=>{
  // Switch to ligth
  sun.classList.remove('sun-dark');
  lune.classList.remove('lune-dark');
  switchContainer.style.backgroundColor = '#48A6DE';
  root.style.backgroundColor = '#FFFFFF';
  imageDay.classList.remove('img-day-dark');
  imageNigth.classList.remove('img-nigth-dark');
  text.style.color = '#000000';
});