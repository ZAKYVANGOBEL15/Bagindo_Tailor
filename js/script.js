const toggle = document.querySelector('.humburger');

const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', ()=> {
    
    toggle.classList.toggle('change')

    sidebar.classList.toggle('sidebar_after')

})