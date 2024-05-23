
function escrevendoLetra(){
    function ativaLetra(elemento) {
        const arrTexto=elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra,i) => {
            setTimeout(()=>{
                elemento.innerHTML += letra;
            },75 * i);
        });
    }
    const titulo=document.querySelector(".digitando");
    ativaLetra(titulo);
}
escrevendoLetra()
const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');

ativaMenu.addEventListener('click',()=>{
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);

        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
        
    });
});