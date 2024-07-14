const toggle = document.querySelector('.toggle');

const sidebar = document.querySelector('.sidebar')

const round = document.querySelector('.round') 

toggle.addEventListener('click', ()=> {
    sidebar.classList.toggle('sidebar2');


    round.addEventListener('click', () => {
        round.classList.toggle('round_after')
        
    })

})




