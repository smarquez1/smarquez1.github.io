import Typed from 'typed.js';
import feather from 'feather-icons';

feather.replace();

const options = {
  strings: ['Web Developer based in Spain', 'Software Engineer from Argentina'],
  typeSpeed: 30,
  smartDelay: 200,
  backDelay: 5000,
  loop: true,
  showCursor: true,
};

const introductoryText = document.querySelector('#introduction > .typed');
Typed(introductoryText, options);
