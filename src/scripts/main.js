import Typed from 'typed.js';
import feather from 'feather-icons';

feather.replace();

new Typed('#intro .typed', {
  strings: ['Web Developer based in Spain', 'Software Engineer from Argentina'],
  typeSpeed: 40,
  smartDelay: 200,
  backDelay: 5000,
  loop: true,
  showCursor: true,
});

// Navbar links
const linkIntro = document.querySelector('#link-intro')
const linkAbout = document.querySelector('#link-about')

const sectionIntro = document.querySelector('#intro')
const sectionAbout = document.querySelector('#about')

sectionAbout.style.display = 'none'

linkAbout.onclick = () => {
  sectionIntro.style.display = 'none';
  sectionAbout.style.display = '';
};

linkIntro.onclick = () => {
  sectionIntro.style.display = '';
  sectionAbout.style.display = 'none';
};
