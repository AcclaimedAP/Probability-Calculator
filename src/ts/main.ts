import compareEvents from "./math";

function calculateTwoEvents() {
    const chanceForOutput = document.getElementById('chanceForOutput') as HTMLOutputElement;
    const eventA = document.getElementById('InputEventA') as HTMLInputElement;
    const eventB = document.getElementById('InputEventB') as HTMLInputElement;
    const valueA = Number(eventA.value);
    const valueB = Number(eventB.value);
    let result: number[];
    result = compareEvents(valueA, valueB);

    chanceForOutput.innerHTML = `
    A occur: ${result[0]}%<br>
    B occur: ${result[1]}%<br>
    Both A and B occurs: ${result[2]}%<br>
    A, B or both occurs: ${result[3]}%<br>
    A or B occurs, but not both: ${result[4]}%<br>
    Neither occurs: ${result[5]}%<br>
    A occurs, but not B: ${result[6]}%<br>
    B occurs, but not A: ${result[7]}%<br>
    `;
}



function init() {

    const eventA = document.getElementById('InputEventA') as HTMLInputElement;
    const eventB = document.getElementById('InputEventB') as HTMLInputElement;
    

    eventA.addEventListener('change', calculateTwoEvents);
    eventB.addEventListener('change', calculateTwoEvents);

}

init();