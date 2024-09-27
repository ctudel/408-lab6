/* Data structures */
const cats = ['/img/cat1.jpg', '/img/cat2.jpg', '/img/cat3.jpg', '/img/cat4.jpg'];
const dogs = ['/img/dog1.jpg', '/img/dog2.jpg', '/img/dog3.jpg', '/img/dog4.jpg'];
const spiders = ['/img/spider1.jpg', '/img/spider2.jpg', '/img/spider3.jpg', '/img/spider4.jpg'];
const penguins = ['/img/penguin1.jpg', '/img/penguin2.jpg', '/img/penguin3.jpg', '/img/penguin4.jpg'];
const reptiles = ['/img/lizard1.jpg', '/img/lizard2.jpg', '/img/lizard3.jpg', '/img/lizard4.jpg'];
const names = ["Alex", "Jordan", "Taylor", "Avery", "Morgan", "Casey", "Riley", "Quinn", "Cameron", "Jamie", "Skyler", "Dakota", "Emerson", "Reese", "Finley"];

const pets = new Map([
  ["cat", cats],
  ["dog", dogs],
  ["spider", spiders],
  ["penguin", penguins],
  ["reptile", reptiles],
]);


/* DOM selectors */
const form = document.querySelector("form");
const petTypes = document.querySelectorAll("input");
const imageContainer = document.getElementById("pet-container");


/* Gets a new pet */
function getPet(e) {
  e.preventDefault(); // prevent default form actions

  // Performs action based on checked radio a button
  petTypes.forEach(pet => {
    if (pet.checked) {
      const petList = pets.get(pet.id);
      generate(pet.value, petList);
    }
  });
}

/* Generates pet image */
function generate(type, petList) {
  const name = names[Math.floor(Math.random() * 150) % 15]; // generate pet name
  const petPhoto = petList[Math.floor(Math.random() * 150) % 4]; // generate pet photo

  const img = document.createElement("img");
  img.src = petPhoto;
  img.alt = "a quirky pet";
  img.width = "300";

  // send new elements to DOM
  // imageContainer.appendChild(h2);
  imageContainer.appendChild(img);
  imageContainer.style.display = "flex";
  alert(`Say hello to your unusual friend, ${name} the ${type}!`);
}

/* Closes image popup if it is active */
function closePopup(e) {
  if (e.target == imageContainer) {
    const img = document.querySelector("img");
    img.remove();
    imageContainer.style.display = "none";
  }
}

/* Event listeners */
form.addEventListener('submit', getPet);
window.onclick = closePopup;
