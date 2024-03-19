const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// cards 
const cardsWrapper = document.querySelector('.cards-wrapper');
const scrollPrev = document.querySelector('.scroll-btn.prev');
const scrollNext = document.querySelector('.scroll-btn.next');

let scrollPosition = 0;
const cardWidth = document.querySelector('.card').offsetWidth + 20;

scrollPrev.addEventListener('click', () => {
  scrollPosition -= cardWidth;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  updateScrollPosition();
});

scrollNext.addEventListener('click', () => {
  const maxScroll = cardsWrapper.scrollWidth - cardsWrapper.clientWidth;
  scrollPosition += cardWidth;
  if (scrollPosition > maxScroll) {
    scrollPosition = maxScroll;
  }
  updateScrollPosition();
});

function updateScrollPosition() {
  cardsWrapper.style.transform = `translateX(-${scrollPosition}px)`;
}

// Mobile touch scrolling
let touchStartX = 0;
let touchMoveX = 0;

cardsWrapper.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

cardsWrapper.addEventListener('touchmove', (e) => {
  touchMoveX = e.touches[0].clientX;
});

cardsWrapper.addEventListener('touchend', () => {
  const touchDistance = touchStartX - touchMoveX;
  if (touchDistance > 50) {
    scrollNext.click();
  } else if (touchDistance < -50) {
    scrollPrev.click();
  }
});
// end 


// 3  designing section



