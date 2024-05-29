
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
document.querySelector('.dark-mode-switch').onclick = () =>{
    document.querySelector('#body').classList.toggle('dark');
    document.querySelector('#body').classList.toggle('light');
}
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navegacao-primaria li a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});