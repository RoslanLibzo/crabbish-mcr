console.log('HELLOOO IM navigation!');

const hamburgerBtn = document.querySelector('.mobile-hamburger');
  const websiteNav = document.querySelector('.website-nav-wrapper');

  hamburgerBtn.addEventListener('click', function(e){
    hamburgerBtn.classList.toggle('mobile-hamburger--active');
    if(hamburgerBtn.classList.contains('mobile-hamburger--active')){
      hamburgerBtn.setAttribute('aria-expanded', true);
    } else {
      hamburgerBtn.setAttribute('aria-expanded', false);
    }
    websiteNav.classList.toggle('website-nav-wrapper--expanded')
})

