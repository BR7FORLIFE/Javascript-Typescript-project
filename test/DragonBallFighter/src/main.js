const $sectionn = document.querySelector(".wheel")

async function getAllCharactersAndInfo(){
    const characters = await fetch("https://dragonball-api.com/api/characters/")
    const data = await characters.json()
    return data
}




