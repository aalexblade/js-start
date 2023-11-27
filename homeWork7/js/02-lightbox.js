import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) =>
    `
        <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>
    `
)

gallery.insertAdjacentHTML('beforeend', markup.join(''))

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

lightbox.on("nextDone.simplelightbox", function () {
    console.log("This is next picture");
});

lightbox.on("change.simplelightbox", function () {
    console.log("We wait next picture");
});