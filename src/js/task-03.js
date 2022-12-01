const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryImg = document.querySelector('.gallery');

images.forEach(image => {
const createLi = document.createElement("li");
const createImg = document.createElement("img");
createImg.setAttribute('src', image.url);
createImg.setAttribute('alt', image.alt);
createImg.classList.add('gallery__img');
createLi.appendChild(createImg);
galleryImg.insertAdjacentElement('beforeend', createLi);
});

// const galleryImg = document.querySelector('.gallery');

// const markup = images.map(image => {
//   console.log(image)
// })