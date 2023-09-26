function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! Your message has been sent:\n\nEmail: ${email}\nMessage: ${message}`);
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('message').value="";

    }


const firstFrame = document.querySelector('#about');
firstFrame.style.display = 'block';

// Show the selected frame when clicking on the navigation links
const navLinks = document.querySelectorAll('nav a');
const frames = document.querySelectorAll('.frame');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetFrame = document.querySelector(link.getAttribute('href'));
    frames.forEach((frame) => frame.style.display = 'none');
    targetFrame.style.display = 'block';
  });
});
