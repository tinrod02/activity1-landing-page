document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    const animatedTextContainer = document.querySelector('.animated-text-container');
    const impactToggle = document.querySelector('.impact-toggle');
    const impactSections = document.querySelector('.impact-sections');
    const arrowDown = document.querySelector('.arrow-down');
    const arrowUp = document.querySelector('.arrow-up');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navLinks = document.querySelector('.nav-links');

    // Text animation timing
    const animationDuration = 14000; 
    const animationInterval = 2000; 

    function changeText() {
        const texts = [
            "DISCOVER SOMETHING NEW", 
            "DISCOVER SOMETHING IMPROVED", 
            "DISCOVER SOMETHING MORE DETAILED", 
            "DISCOVER SOMETHING MORE RESPONSIVE", 
            "A NEW DESIGN", 
            "A NEW EXPERIENCE", 
            "A NEW CONNECTIVE"
        ];
        
        let index = 0;
        const textElements = Array.from(animatedTextContainer.children);

        setInterval(() => {
            textElements.forEach((el, i) => {
                el.style.opacity = (i === index) ? 1 : 0;
            });
            index = (index + 1) % texts.length;
        }, animationInterval);
    }

    changeText();

    setTimeout(function() {
        heroContent.classList.add('show-hero');
    }, animationDuration);

    impactToggle.addEventListener('click', function() {
        if (impactSections.style.display === 'none' || !impactSections.style.display) {
            impactSections.style.display = 'block';
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'block';
        } else {
            impactSections.style.display = 'none';
            arrowDown.style.display = 'block';
            arrowUp.style.display = 'none';
        }
    });

    menuToggle.addEventListener('click', function() {
        navLinks.classList.add('active'); 
        menuClose.style.display = 'block';
        setTimeout(() => menuClose.style.opacity = '1', 0);
        localStorage.setItem('menuOpen', 'true'); 
    });

    menuClose.addEventListener('click', function() {
        menuClose.style.opacity = '0'; 
        setTimeout(() => {
            navLinks.classList.remove('active'); 
            menuClose.style.display = 'none'; 
            localStorage.setItem('menuOpen', 'false');
        }, 300);
    });

    if (localStorage.getItem('menuOpen') === 'true') {
        navLinks.classList.add('active');
        menuClose.style.display = 'block';
        menuClose.style.opacity = '1';
    }

    function getRandomPastelColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r + 100}, ${g + 100}, ${b + 100}, 0.5)`;
    }

    const impactBoxes = document.querySelectorAll('.impact-box');
    const importanceBoxes = document.querySelectorAll('.importance-box');

    impactBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = getRandomPastelColor();
            box.classList.add('hover-animation');
        });
        
        box.addEventListener('mouseout', function() {
            box.style.backgroundColor = '';
            box.classList.remove('hover-animation');
        });
    });

    importanceBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = getRandomPastelColor();
            box.classList.add('hover-animation');
        });
        
        box.addEventListener('mouseout', function() {
            box.style.backgroundColor = ''; 
            box.classList.remove('hover-animation');
        });
    });
});
