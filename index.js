const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const deg = 6; // graus

//timer
setInterval(() => {
  let day = new Date(); // day
  let hh = day.getHours() * 30; // hours
  let mm = day.getMinutes() * deg; // minutes
  let ss = day.getSeconds() * deg; // seconds

  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});