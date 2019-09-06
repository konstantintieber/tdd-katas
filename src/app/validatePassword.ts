function containsNumber(password: string): boolean {
    return /[\d]/.test(password);
}

function containsCapitalLetter(password: string): boolean {
    return /[A-Z]/.test(password);
}

function containsSmallLetter(password: string): boolean {
    return /[a-z]/.test(password);
}

export function validatePassword(password: string): boolean {
    if (password.length < 8) {
        return false;
    }
    if (!containsNumber(password)) {
        return false;
    }
    if (!containsCapitalLetter(password)) {
        return false;
    }
    if (!containsSmallLetter(password)) {
        return false;
    }
    return true;
}