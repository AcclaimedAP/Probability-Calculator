export function compareEvents(a: number, b: number): number[] {
    let result: number[] = [];
    result.push(a);
    result.push(b);
    result.push(a * b); // Both occurs
    result.push(a + b - (a * b)); // A, B or both occurs
    result.push(a + b - (2 * a * b)); // A or B occurs, but not both
    result.push(1 - (a * b)); // Neither occurs
    result.push(a * (1 - b)); // A but not B
    result.push(b * (1 - a)); // -''-
    result = correctRounding(result);
    return result;
}

export function binomialProbabilityResult(chance: number, goal: number, occurrences: number): number[] {
    let result: number[] = [];

    result.push(binomialProbability(chance, goal, occurrences)); // Exact
    result.push(commulativeBinomialProbability(chance, goal, occurrences)); // Commulative
    result = correctRounding(result);
    return result;
}

function commulativeBinomialProbability(chance: number, goal: number, occurences: number): number {
    let commulativeOdds: number[] = [];
    while (goal <= occurences) {
        commulativeOdds.push(binomialProbability(chance, goal, occurences));
        goal += 1;
    }

    const summedResult = commulativeOdds.reduce((sum, currentValue) => sum + currentValue, 0);
    return summedResult;
}

function correctRounding(array: number[]): number[] {
    let result: number[] = [];
    array.forEach(element => {
        element = element * 100;
        const string = element.toFixed(3);
        result.push(Number(string));
    });
    return result;
}

function binomialProbability(chance: number, goal: number, occurrences: number) {
    const combinations = factorial(occurrences) / (factorial(goal) * factorial(occurrences - goal));
    const probability = Math.pow(chance, goal) * Math.pow(1 - chance, occurrences - goal);
    return combinations * probability;
}


function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};