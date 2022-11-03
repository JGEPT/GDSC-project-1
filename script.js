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
