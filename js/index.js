window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#list").classList.add("menu-active");
    document.querySelector('body').style.overflowY = 'hidden';
  })

  document.querySelector("#point").addEventListener("click", function () {
    document.querySelector("#list").classList.remove("menu-active")
    document.querySelector('body').style.overflowY = 'scroll';
  })

  var header = document.getElementById("header");

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 150) {
      header.classList.add('switch');
    } else {
      header.classList.remove('switch');
    }
  });

  const swiper = new Swiper ('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 'auto',
    scroll: true,
  })

  var tl = gsap.timeline({paused:true});
  var tlTwo = gsap.timeline({paused:true});

  tl.to('.header', {duration: 0.5, opacity: 1})
    .to(".home", {duration: 0.5, opacity: 1, y: 0})
  setTimeout (() => {
    tl.play()
  }, 500)

  tlTwo.to('.home__modal', {duration: 0.5, opacity: 1})
        .to('.home__modal__content', {duration: 0.5, opacity: 1, y: 0})

  var modal = document.getElementById('modal')
  var closeModal = document.getElementById('closeModal')
  var button = document.getElementById('button')

  button.onclick = function() {
    modal.style.display = 'block';
    setTimeout (() => {
      tlTwo.play()
    }, 200)
    document.querySelector('body').style.overflow = 'hidden';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      setTimeout (() => {
        modal.style.display = "none";
      }, 1000)
      tlTwo.reverse();
      document.querySelector('body').style.overflow = "scroll"
    }
  }
})
