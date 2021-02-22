const images = [
  "img/carousel-img/karusel-adidas.jpg",
  "img/carousel-img/karusel-aerodyne.jpg"
  "img/carousel-img/karusel-aeroplane.jpg",
  "img/carousel-img/karusel-akando.jpg"
  "img/carousel-img/karusel-justdoit.jpg"
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
