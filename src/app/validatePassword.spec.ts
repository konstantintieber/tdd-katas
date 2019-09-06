import { validatePassword } from './validatePassword'

// ABcd1234 -> true
// ABcd123  -> false
// ABcdefgh -> false
// abcdefg1 -> false
// abcdefgh -> false
// ABCDEFG1 -> false
// ABCDEFGH -> false
// 12345678 -> false
describe('isSecure', () => {
    it('returns true for a valid password', () => {
        const result = validatePassword('ABcd1234');
        expect(result).toBe(true);
    });

    it('returns false for a password with less than 8 characters', () => {
        const result = validatePassword('ABcd123');
        expect(result).toBe(false);
    });

    it('returns false for a password with no numbers', () => {
        const result = validatePassword('ABcdefgh');
        expect(result).toBe(false);
    });

    it('returns false for a password with no capital letters', () => {
        const result = validatePassword('abcdefg1');
        expect(result).toBe(false);
    });

    it('returns false for a password with no small letters', () => {
        const result = validatePassword('ABCDEFG1');
        expect(result).toBe(false);
    });
});

// SO SOLLTE MAN ES WIEDERUM NICHT MACHEN
// ----------------------
// mindestens acht Zeichen
// '123' -> false
// '12345678' -> true
// '123456789' -> true
// mindestens eine Ziffer 0 ... 9
// 'aaaaaaaaa' -> false
// '1aaaaaaaa' -> true
// '2aaaaaaaa' -> true
// mindestens ein Großbuchstabe A ... Z
// 'Aaaaaaaaa' -> true
// 'aaaaaaaaa' -> false
// 'AAAAAAAAA' -> true
/** describe('isSecure', () => {
    it('returns false for password with length < 8',() => {
        const result = isSecure('123');
        expect(result).toBe(false);
    });

    it('returns true for password with length >= 8',() => {
        const result = isSecure('12345678');
        expect(result).toBe(true);
    });

    it('returns false for password without numbers',() => {
        const result = isSecure('aaaaaaaa');
        expect(result).toBe(false);
    });

    it('returns true for password containing numbers',() => {
        const result = isSecure('1aaaaaaa');
        expect(result).toBe(true);
    });

    it('returns true for password containing capital letter',() => {
        const result = isSecure('Aaaaaaaa');
        expect(result).toBe(true);
    });

    ...
});*/