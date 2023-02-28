export default function compareEvents(a: number, b: number): number[] {
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

function correctRounding(array: number[]): number[] {
    let result: number[] = [];
    array.forEach(element => {
        element = element * 100;
        const string = element.toFixed(5);
        result.push(Number(string));
    });
    return result;
}