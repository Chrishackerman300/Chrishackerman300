const btn= document.querySelector('.header__container-button')
const navBar= document.querySelector('.menu')

btn.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
})