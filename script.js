const openBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');


const tl = gsap.timeline({ paused: true,  ease: 'power3' });
tl.fromTo('.menu', { display: 'none', opacity: 0 }, { display: 'block', duration: .8, opacity: 1, })
  .from('.menu__top', { duration: 0.4, y: -30, opacity: 0, })
  .from('.nav__list', { duration: 0.4, y: 30, opacity: 0,  })
  .from('.social, .menu__right', { duration: 0.4, y: -30, opacity: 0, })
  .add(function(){
    const ml = gsap.timeline({ ease: 'power3'})
    ml.fromTo('.hero__title, .hero__btn', {display: 'none', opacity: 0, y: 42}, { display: 'block', opacity: 1, duration: 1, delay: 1.5, y: 0,})
    .from('.hero__descr', { duration: .3,  opacity: 0,})
    .from('#photo-1', { duration: .3, opacity: 0,  })
    .from('#photo-2', { duration: .3, opacity: 0,  })
    .from('#photo-3', { duration: .3, opacity: 0, })
    .from('.photos__author', { duration: .3, opacity: 0,  })
  })


openBtn.onclick = function () {
  tl.play();
}
closeBtn.onclick = function () {
  tl.reverse()
}







