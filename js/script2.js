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



const toggle = document.querySelector('.humburger');

const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', ()=> {
    
    toggle.classList.toggle('change')

    sidebar.classList.toggle('sidebar_after')

})


