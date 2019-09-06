function isFizz(n: number) {
    return n % 3 === 0 || `${n}`.includes('3');
}

function isBuzz(n: number) {
    return n % 5 === 0 || `${n}`.includes('5');
}

export function fizzbuzz(n: number) : string {
    if (isFizz(n) && isBuzz(n)) {
        return 'fizzbuzz';
    }
    if (isFizz(n)) {
        return 'fizz';
    }
    if (isBuzz(n)) {
        return 'buzz';
    }
    return `${n}`;
}