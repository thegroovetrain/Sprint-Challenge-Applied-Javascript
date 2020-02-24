/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

data = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg',
]

const carouselFactory = (images) => {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const style = document.createElement('style');
  style.textContent = ".carousel img { animation: fade 1.5s; } @keyframes fade { 0% { opacity: 0.4; } 100% { opacity: 1; }}"
  carousel.append(style);

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  leftButton.addEventListener('click', event => {
    navSlides(-1);
  });
  carousel.append(leftButton);

  images.forEach(imgref => {
    const image = document.createElement('img');
    image.setAttribute('src', imgref);
    carousel.append(image);
  });

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  rightButton.addEventListener('click', event => {
    navSlides(1);
  });
  carousel.append(rightButton);

  return carousel;
}

let slideIndex = 1;

const navSlides = (n) => {
  showSlides(slideIndex += n);
}

const showSlides = (n) => {
  let i;
  const slides = document.querySelectorAll('.carousel img');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 0) { slideIndex = slides.length }

  for ( i = 0; i < slides.length; i++ ) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex - 1].style.display = "block";
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(carouselFactory(data));
carouselContainer.querySelector('img').style.display = "block";