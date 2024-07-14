const toggle = document.querySelector('.toggle');

const sidebar = document.querySelector('.sidebar')

const round = document.querySelector('.round') 

const cont_image = document.querySelector('.cont-image')

const thumb_image = document.querySelector('.thumb-image')

const image_1 = document.querySelectorAll('.image-1')

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








