/*Check out https://tiffanywhite.dev/ ; I took this from her! */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Charles, and I am an aspiring full-stack engineer and wannabe hacker.']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  // .typeString('My name is Charles, and I am an aspiring full-stack engineer and wannabe hacker.')
  .deleteAll(1)
  .typeString('I work for <strong>[REDACTED]</strong> as an investment manager, and I code, run, and drive my wife and son crazy on the weekends.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="#">Blog</a> <br />')
  .typeString('<a href="#">Portfolio</a> <br />')
  .typeString('<a href="#">Resume</a> <br />')
  .typeString('<a href="https://www.linkedin.com/in/charles-holtsclaw/">LinkedIn</a> <br />')
  .typeString('<a href="http://github.com/dezvolt">GitHub</a> <br />')
  .pauseFor(1000)