import { convertNumber } from './convertNumber';

// 1    -> I
// 9    -> IX
// 7    -> VII
// 5    -> V
// 10   -> X
// 50   -> L
// 100  -> C
// 500  -> D
// 1000 -> M
// 2019 -> MMXIX

describe('convertNumber', () => {
    it('returns I for 1', () => {
        const result = convertNumber(1);
        expect(result).toBe('I');
    });

    it('returns IV for 4', () => {
        const result = convertNumber(4);
        expect(result).toBe('IV');
    });

    it('returns VII for 7', () => {
        const result = convertNumber(7);
        expect(result).toBe('VII');
    });

    it('returns IX for 9', () => {
        const result = convertNumber(9);
        expect(result).toBe('IX');
    });
});

