const dogButton = document.getElementById("dog");
const techButton = document.getElementById("technologist");
const threadButton = document.getElementById("thread");
const babyButton = document.getElementById("baby");
const aboutImg = document.getElementById("about-img");
const dogLink = document.getElementById("dogLink");
const babyLink = document.getElementById("babyLink");
const creativeLink = document.getElementById("creativeLink");

let currentButton = document.querySelector(".selected-emoji");

// SET AND DISPLAY CURRENT IMAGE
const setNewCurrentButton = (nextCurrent) => {
    currentButton.classList.remove('selected-emoji')
    currentButton = nextCurrent;
    currentButton.classList.add('selected-emoji')

    if(techButton === currentButton) aboutImg.src="/assets/kf.jpg";
    if(dogButton === currentButton) aboutImg.src="/assets/blue.jpg";
    if(threadButton === currentButton) aboutImg.src="/assets/creativekayla.jpg";
    if(babyButton === currentButton) aboutImg.src="/assets/babykayla.JPG"; 
}

    dogButton.addEventListener("click", () => setNewCurrentButton(dogButton));
    techButton.addEventListener("click", () => setNewCurrentButton(techButton));
    threadButton.addEventListener("click", () => setNewCurrentButton(threadButton));
    babyButton.addEventListener("click", () => setNewCurrentButton(babyButton));
    dogLink.addEventListener("click", ()=> setNewCurrentButton(dogButton));
    babyLink.addEventListener("click", () => setNewCurrentButton(babyButton));
    creativeLink.addEventListener("click", () => setNewCurrentButton(threadButton));


