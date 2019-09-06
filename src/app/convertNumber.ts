function convertOnes(number): string {
    let ones = number % 10;
    let result = '';
    let onesModFive = ones % 5;
    if (onesModFive >= 0 && onesModFive < 4) {
         if (ones >= 5) {
             result += 'V';
         }
        
        for(let i = 0; i < onesModFive; i++) {
            result += 'I'
        }
    } else {
        let onesMinus5 = ones - 5;
        if (ones === 4 || ones === 9) {
            result = 'I';
        }

        result += onesMinus5 > 0 ? 'X' : 'V';
    }

    return result;
}

export function convertNumber(number: number): string {
    return convertOnes(number);
}