const seeMoreButton = document.getElementById('see-more');
const additionalImages = document.getElementById('additional-images');
let  imageCount = 0;
 
const images = ['Azeez.png', 'graphics man.PNG', 'porty.png'];
let isExpanded = false;
seeMoreButton.addEventListener('click', () => {
    if (imageCount < images.length) {
        const newImage = document.createElement('img');
        newImage.src = images[imageCount];
        newImage.style.width = '70vw' ;
         newImage.style.height = '80vw' ;
         newImage.style.margin = '10px';
        additionalImages.appendChild(newImage);
        imageCount++;
    } else {
        seeMoreButton.disabled = true;
        seeMoreButton.textContent = 'No more images'; 
    }
});

setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}, 1500);


