import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
    it('returns 1 for 1',() => {
        const result = fizzbuzz(1);
        expect(result).toBe('1');
    });

    it('returns 2 for 2',() => {
        const result = fizzbuzz(2);
        expect(result).toBe('2');
    });

    it('returns fizz for 3',() => {
        const result = fizzbuzz(3);
        expect(result).toBe('fizz');
    });

    it('returns buzz for 5',() => {
        const result = fizzbuzz(5);
        expect(result).toBe('buzz');
    });

    it('returns fizz for 6',() => {
        const result = fizzbuzz(6);
        expect(result).toBe('fizz');
    });

    it('returns buzz for 10',() => {
        const result = fizzbuzz(10);
        expect(result).toBe('buzz');
    });

    it('returns fizzbuzz for 15',() => {
        const result = fizzbuzz(15);
        expect(result).toBe('fizzbuzz');
    });

    it('returns fizzbuzz for 30',() => {
        const result = fizzbuzz(30);
        expect(result).toBe('fizzbuzz');
    });

    it('returns fizz for 13',() => {
        const result = fizzbuzz(13);
        expect(result).toBe('fizz');
    });

    it('returns buzz for 51',() => {
        const result = fizzbuzz(51);
        expect(result).toBe('fizzbuzz');
    });

    it('returns buzz for 52',() => {
        const result = fizzbuzz(52);
        expect(result).toBe('buzz');
    });
});