import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)

gallery.insertAdjacentHTML('beforeend', markup.join(''))
gallery.addEventListener('click', onClick)

function onClick(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
    `)
  instance.show()

  document.addEventListener('keydown', (eventKeyboard) => {
    if (eventKeyboard.key === 'Escape') instance.close();
  });

}




