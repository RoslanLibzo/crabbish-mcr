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


function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const element = entry.target;
          const endNum = Number(element.querySelector('strong').innerHTML);
          if (!isNaN(endNum)) {
              animateValue(element.querySelector('strong'), 0, endNum, 3000);
          } else {
              console.log('End num was not a number!');
          }
          observer.unobserve(element); // Stop observing once the animation starts
      }
  });
}


const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

document.querySelectorAll('.num-increment__percent, .num-increment__plus').forEach(element => {
    observer.observe(element);
});