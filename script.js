// Add more stars to the background
function createStars(elementId, numberOfStars) {
    const starsContainer = document.getElementById(elementId);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * screenWidth}px`;
        star.style.top = `${Math.random() * screenHeight}px`;
        star.style.animationDuration = `${50 + Math.random() * 100}s`;
        starsContainer.appendChild(star);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize stars
window.addEventListener('load', () => {
    createStars('stars', 100);
    createStars('stars2', 50);
    createStars('stars3', 25);
});

// Responsive navigation menu
const navToggle = document.createElement('div');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '☰';
document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

// Add this to the CSS file
/*
.nav-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .nav-toggle {
        display: block;
    }

    nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: rgba(27, 39, 53, 0.9);
    }

    nav ul li {
        margin: 10px 0;
    }
}
*/