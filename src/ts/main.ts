import { compareEvents, binomialProbabilityResult } from "./math";

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

function calculateBinomial() {
    const binomialOutput = document.getElementById('binomialOutput') as HTMLOutputElement;
    const inputChance = document.getElementById('inputChance') as HTMLInputElement;
    const inputGoal = document.getElementById('inputGoal') as HTMLInputElement;
    const inputOccurances = document.getElementById('inputOccurances') as HTMLInputElement;
    const valueChance = Number(inputChance.value);
    const valueGoal = Number(inputGoal.value);
    const valueOccurances = Number(inputOccurances.value);
    let result: number[];
    result = binomialProbabilityResult(valueChance, valueGoal, valueOccurances);

    binomialOutput.innerHTML = `
    Chance of it occuring exactly ${valueGoal} times: ${result[0]}%<br>
    Chance of it occuring ${valueGoal} times or more: ${result[1]}%
    `
}


function init() {

    const eventA = document.getElementById('InputEventA') as HTMLInputElement;
    const eventB = document.getElementById('InputEventB') as HTMLInputElement;
    

    eventA.addEventListener('change', calculateTwoEvents);
    eventB.addEventListener('change', calculateTwoEvents);


    const inputChance = document.getElementById('inputChance') as HTMLInputElement;
    const inputGoal = document.getElementById('inputGoal') as HTMLInputElement;
    const inputOccurances = document.getElementById('inputOccurances') as HTMLInputElement;

    inputChance.addEventListener('change', calculateBinomial);
    inputGoal.addEventListener('change', calculateBinomial);
    inputOccurances.addEventListener('change', calculateBinomial);
    
}

init();