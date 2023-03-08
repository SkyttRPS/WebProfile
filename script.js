// Add an event listener to the "Hire Me" button to display a message
/*const hireButton = document.querySelector('#hire-button');
hireButton.addEventListener('click', () => {
    alert('Thank you for considering me for your project!');
});

// Toggle a "skills" section on and off
const skillsButton = document.querySelector('#skills-button');
const skillsSection = document.querySelector('#skills-section');
skillsButton.addEventListener('click', () => {
    skillsSection.classList.toggle('hidden');
}); */

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(collapsible => {
    const content = collapsible.querySelector('ul');
    collapsible.addEventListener('click', () => {
        collapsible.classList.toggle('active');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
