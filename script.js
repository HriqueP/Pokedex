const body = document.body;
const imgMode = document.getElementById("img-mode");
const cards = document.querySelectorAll(".card-pokemon");
const pokeEntry = document.querySelectorAll(".poke-entry");

function changeMode() {
  if (imgMode.src.includes("sun-icon.png")) {
    imgMode.src = "assets/moon-icon.png";
    body.classList.toggle("light-mode-body");

    for (i = 0; i < cards.length; i++) {
      cards[i].classList.remove("dark-mode-card");
      cards[i].classList.add("light-mode-card");
      pokeEntry[i].style.borderColor = "var(--secondary-light)";
    }
  } else {
    imgMode.src = "assets/sun-icon.png";
    body.classList.toggle("light-mode-body");

    for (i = 0; i < cards.length; i++) {
      cards[i].classList.remove("light-mode-card");
      cards[i].classList.add("dark-mode-card");
      pokeEntry[i].style.borderColor = "var(--secondary-dark)";
    }
  }
}
