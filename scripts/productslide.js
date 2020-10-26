 function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("room-active"));
      highlight.src = bigSrc;
      preview.classList.add("room-active");
    });
  });
}

imageGallery();


/************************************************************************/

const shareButton = document.querySelector('.share__phone')
const overlay = document.querySelector('.share__overlay')
const shareModal = document.querySelector('.share__computer')

const title = window.document.title
const url = window.document.location.href
    
shareButton.addEventListener('click', event => {

if (navigator.share) {
    navigator.share({
        title: `${title}`,
        url: `${url}`,
    })
    .then(() => {
        console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
            overlay.classList.add('show-share')
            shareModal.classList.add('show-share')
    }
    
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('show-share');
    shareModal.classList.remove('show-share');
})











