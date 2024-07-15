const swiper = new Swiper('.slide-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive Breakpoint0

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        740: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

  });



//   Toggle Sidebar



const toggle = document.querySelector('.toggle');

const sidebar = document.querySelector('.sidebar')

const round = document.querySelector('.round') 

const cont_image = document.querySelector('.cont-image')

const thumb_image = document.querySelector('.thumb-image')


toggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar2');


    round.addEventListener('click', () => {
        round.classList.toggle('round_after')
        
    })

})

cont_image.addEventListener('click', (e) => {
    
    if(e.target.className == 'img-baju') {
        thumb_image.src = e.target.src

        
    } 

})


