
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

// Pagination
document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 6;
    const skillsList = document.getElementById("skillsList");
    const skillsItems = skillsList.querySelectorAll("li");
    let currentPage = 1;
    const totalPages = Math.ceil(skillsItems.length / itemsPerPage);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        skillsItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    function updatePaginationButtons() {
        const prevButton = document.querySelector("#paginationControls button:first-child");
        const nextButton = document.querySelector("#paginationControls button:last-child");

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePaginationButtons();
        }
    }

    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
            updatePaginationButtons();
        }
    }

    document.querySelector("#paginationControls button:first-child").addEventListener("click", prevPage);
    document.querySelector("#paginationControls button:last-child").addEventListener("click", nextPage);

    showPage(currentPage);
    updatePaginationButtons();
});
