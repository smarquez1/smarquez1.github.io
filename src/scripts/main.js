function randomColor(colors) {
  return colors[Math.floor(Math.random()*colors.length)];
}

function colorize() {
  const style = getComputedStyle(document.body)

  const dark = style.getPropertyValue('--dark')
  const blue = style.getPropertyValue('--blue')
  const green = style.getPropertyValue('--green')
  const purple = style.getPropertyValue('--purple')
  const colors = [dark, blue, green, purple]

  document.documentElement.style.setProperty('--background', randomColor(colors));
}

function init() {
	/*
  new Typed('#intro .typed', {
    strings: ['Web Developer based in Valencia, Spain'],
    typeSpeed: 40,
    smartDelay: 200,
    backDelay: 5000,
    loop: false,
  });
	*/

  // Target #intro section if URL contains no anchor
  if (window.location.hash.length === 0) {
    window.location.href = '#intro'
  }
}

init()
