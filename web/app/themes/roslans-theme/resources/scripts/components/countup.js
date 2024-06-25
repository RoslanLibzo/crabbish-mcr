console.log('HELLOOO IM COUNTUP!');

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
const percent = document.querySelector(".num-increment__percent strong");
const percentEndNum = percent.innerHTML;
if(Number(percentEndNum)){
    animateValue(percent, 0, percentEndNum, 2000);
} else {
    console.log('Percent num was not a number!');
}

const plus = document.querySelector(".num-increment__plus strong");
const plusEndNum = plus.innerHTML;

if(Number(plusEndNum)){
    animateValue(plus, 0, plusEndNum, 2000);
} else {
    console.log('Plus num was not a number!');
}

