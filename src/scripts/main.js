import Typed from 'typed.js';

new Typed('#intro .typed', {
  strings: ['Web Developer based in Spain', 'Software Engineer from Argentina'],
  typeSpeed: 40,
  smartDelay: 200,
  backDelay: 5000,
  loop: true,
  showCursor: true,
});

// Show #intro if URL contains no anchor
if (window.location.hash.length === 0) {
  window.location.href = '#intro'
}
