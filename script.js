/*
- Hente knappen og sette opp en hendelse
- Hente input verdi fra nettsiden
- Hente valg verdi
- Gjøre utrekning
- Hente resultat paragraf og vise utrekning
*/

function unitConverter(event) {
    event.preventDefault()
    
    console.log("Virker du?")
}

const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", unitConverter);