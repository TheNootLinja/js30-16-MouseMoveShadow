const heroSection = document.querySelector('.hero');
const heroText = heroSection.querySelector('h1');
const walk = 100;



function shadow(e) {
  const { offsetWidth: width, offsetHeight: height} = heroSection;
  let { offsetX: x, offsetY: y} = e;
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  heroText.style.textShadow = `
    ${xWalk * 2}px ${yWalk * 2}px 0 rgba(100,0,0,0.25),
    ${xWalk}px ${yWalk}px 0 rgba(100,100,0,0.25),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,100,0,0.25),
    ${xWalk * -2}px ${yWalk * -2}px 0 rgba(0,0,100,0.25)
  `;

}

heroSection.addEventListener('mousemove', shadow)