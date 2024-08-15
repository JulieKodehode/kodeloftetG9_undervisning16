/*
- Hente knappen og sette opp en hendelse X
- Hente input verdi fra nettsiden
- Hente valg verdi
- Gjøre utrekning
- Hente resultat paragraf og vise utrekning
*/

function unitConverter(event) {
    event.preventDefault()
    
    const unitInput = parseFloat(document.querySelector("#unitInput").value);
    // console.log(unitInput);
    // console.log(typeof unitInput);

    const unitFrom = document.querySelector("#unitFrom").value;
    // console.log(unitFrom);
    const unitTo = document.querySelector("#unitTo").value;
    // console.log(unitTo);
    let displayResult = document.querySelector("#displayResult");
    // console.log(displayResult);

    if (unitFrom === "MM" && unitTo === "CM" ) {
        // Conversion: Millimeters to Centimeters
        displayResult.textContent = unitInput / 10;
    } else if (unitFrom === "MM" && unitTo === "M") {
        // Conversion: Millimeters to Meters
        displayResult.textContent = unitInput / 1000;
    } else if (unitFrom === "MM" && unitTo === "KM") {
        // Conversion: Millimeters to Kilometers
        displayResult.textContent = unitInput / 1000000;
    } else if (unitFrom === "CM" && unitTo === "MM") {
        // Conversion: Centimeters to Millimeters
        displayResult.textContent = unitInput * 10;
    } else if (unitFrom === "CM" && unitTo === "M") {
        // Conversion: Centimeters to Meters
        displayResult.textContent = unitInput / 100;
    } else if (unitFrom === "CM" && unitTo === "KM") {
        // Conversion: Centimeters to Kilometers
        displayResult.textContent = unitInput / 100000;
    } else if (unitFrom === "M" && unitTo === "MM") {
        // Conversion: Meters to Millimeters
        displayResult.textContent = unitInput * 1000;
    } else if (unitFrom === "M" && unitTo === "CM") {
        // Conversion: Meters to Centimeters
        displayResult.textContent = unitInput * 100;
    } else if (unitFrom === "M" && unitTo === "KM") {
        // Conversion: Meters to Kilometers
        displayResult.textContent = unitInput / 1000;
    } else if (unitFrom === "KM" && unitTo === "MM") {
        // Conversion: Kilometers to Millimeters
        displayResult.textContent = unitInput * 1000000;
    } else if (unitFrom === "KM" && unitTo === "CM") {
        // Conversion: Kilometers to Centimeters
        displayResult.textContent = unitInput * 100000;
    } else if (unitFrom === "KM" && unitTo === "M") {
        // Conversion: Kilometers to Meters
        displayResult.textContent = unitInput * 1000;
    } else {
        // MM til MM
        // CM til CM
        // M til M
        // KM til KM
        // Error
        displayResult.textContent = "Velg to ulike målenheter.";
        displayResult.style.color = "red";
    }
}

const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", unitConverter);