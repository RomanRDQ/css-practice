const images = [
  "img/carousel-img/adidas-logo-small.jpg",
  "img/carousel-img/aerodyne-logo-small.jpg",
  "img/carousel-img/aeroplane-logo-small.jpg",
  "img/carousel-img/akando-logo-small.jpg",
  "img/carousel-img/just-do-it-logo-small.jpg",
];

let currIdx = 0;

function showCurrentImage() {
  const imgContainer = document.querySelector(".curr");
  imgContainer.src = images[currIdx];
}

showCurrentImage();

function nextImage() {
  currIdx++;
  if (currIdx >= images.length) currIdx = 0;
  showCurrentImage();
}

function prevImage() {
  currIdx--;
  if (currIdx < 0) currIdx = images.length - 1;
  showCurrentImage();
}

document.querySelector(".prev").addEventListener("click", prevImage);
document.querySelector(".next").addEventListener("click", nextImage);
