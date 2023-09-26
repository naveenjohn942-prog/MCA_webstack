function sendMessage() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const size = document.getElementById('sizee').value;
    const req = document.getElementById('req').value;

    const email = document.getElementById('email').value;
  
    alert(`Thank you, ${fname}! Your message has been sent:\n\nEmail: ${email}\nMessage: ${req}`);
    document.getElementById('fname').value="";
    document.getElementById('lname').value="";
    document.getElementById('sizee').value="";

    document.getElementById('email').value="";
    document.getElementById('req').value="";
  
    // You can add more logic here to send the message to a server or perform additional actions.
  }

// Show the first frame by default
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