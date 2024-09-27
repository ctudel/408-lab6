const cats = ['/img/cat1.jpg', '/img/cat2.jpg', '/img/cat3.jpg', '/img/cat4.jpg'];
const dogs = ['/img/dog1.jpg', '/img/dog2.jpg', '/img/dog3.jpg', '/img/dog4.jpg'];
const penguins = ['/img/penguin1.jpg', '/img/penguin2.jpg', '/img/penguin3.jpg', '/img/penguin4.jpg'];
const reptiles = ['/img/lizard1.jpg', '/img/lizard2.jpg', '/img/lizard3.jpg', '/img/lizard4.jpg'];
const pets = new Map([
  ["cat", cats],
  ["dog", dogs],
  ["penguin", penguins],
  ["reptile", reptiles],
]);

/* Selectors */
const form = document.querySelector("form");
const petTypes = document.querySelectorAll("input");
const imageContainer = document.getElementById("pet-container");

/* If picked, get a new pet */
function getPet(e) {
  e.preventDefault(); // prevent default form actions

  // Performs action based on checked radio a button
  petTypes.forEach(pet => {
    if (pet.checked) {
      const petList = pets.get(pet.value);
      generate(pet.value, petList);
    }
  });
}

/* Generates pet image */
function generate(pet, petList) {
  const h2 = document.createElement("h2");
  h2.textContent = `Say hello to your quirky pet ${pet}!`;
  h2.id = "container-h2"
  imageContainer.appendChild(h2);

  const img = document.createElement("img");
  img.src = petList[Math.floor(Math.random() * 10) * 5 % 4];
  img.alt = "a quirky pet";
  img.width = "300";

  imageContainer.appendChild(h2);
  imageContainer.appendChild(img);
  imageContainer.style.display = "flex";
}

/* */
function closePopup(e) {
  if (e.target == imageContainer) {
    const img = document.querySelector("img");
    const h2 = document.querySelector("#container-h2");

    h2.remove();
    img.remove();
    imageContainer.style.display = "none";
  }
}

form.addEventListener('submit', getPet);
window.onclick = closePopup;

// const img = document.createElement("img");
// img.src = "/img/cat1.jpg";
// img.alt = "quirky cat";
// img.width = "300";
// imageContainer.appendChild(img);
