const CharacterSearch = document.querySelector("[data-search]");
const Characters = document.querySelectorAll("a");
const Cards = document.querySelectorAll(".container");
const CharName = document.querySelectorAll("h1");

CharacterSearch.addEventListener("input", (input) => {
    const check = input.target.value.toLowerCase();
    let i = 0;
    Characters.forEach(character => {
        const name = character.textContent.toLowerCase();
        const isVisible = name.includes(check);
        Characters.item(i).classList.toggle("hide", !isVisible);
        i++;
    })
})

Characters.forEach(character => {
  let i = 0;
  CharName.forEach(name => {
    character.addEventListener("click", (click) => {
      const CharacterName = character.textContent;
      const Compare = name.textContent;
      const Visibility = (Compare === CharacterName);
      console.log(CharacterName, Compare, Visibility);
          if(Visibility !== true){
          Cards.item(i).classList.add("invis");
          }
          else{
            Cards.item(i).classList.remove("invis");
          }
          if(i >= (Cards.length-1)){
            i=0;
          }
          else{
            i++;
          }
        })
      })
    })

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-cards]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

