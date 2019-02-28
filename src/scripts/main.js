import Typed from 'typed.js';

function init() {
  // Initialize typed.js
  new Typed('#intro .typed', {
    strings: ['Web Developer based in Spain'],
    typeSpeed: 40,
    smartDelay: 200,
    backDelay: 5000,
    loop: false,
  });

  // Target #intro section if URL contains no anchor
  if (window.location.hash.length === 0) {
    window.location.href = '#intro'
  }
}

init()
