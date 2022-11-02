const CharacterSearch = document.querySelector("[data-search]");
const Characters = document.querySelectorAll("a");

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
