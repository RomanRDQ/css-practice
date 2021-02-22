const images = [

  'img\carousel-img\adidas.png',
  'img\carousel-img\aerodyne.png',
  'img\carousel-img\aeroplane.png',
  'img\carousel-img\akando.png',
  'img\carousel-img\just-do-it.png'
  
]

let currIdx = 0;

function showCurrentImage(){
  const imgContainer = document.querySelector('.curr')
  imgContainer.src = images[currIdx];
}

showCurrentImage();
