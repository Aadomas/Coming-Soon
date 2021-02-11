class Validation {

    static isValidName(name) {
        if (!Validation.isNonEmptyText(name)) {
            return "Vardas neturi buti tuscias";
        }
        if (!Validation.noSpacesAround(name)) {
            return "vardo priekyje ir gale negali buti tarpu";
        }
        if (!Validation.isSingleWord(name)) {
            return "vardas turi buti vienas zodis";
        }
        if (!Validation.isFirstLetterUppercase(name)) {
            return "Vardo pirmoji raide turi buti didzioji";
        }
        if (!Validation.isLowercaseButFirst(name)) {
            return "Vardo visos raides isskyrus pirma turi buti mazosios";
        }
        if (!Validation.onlyAphabetLetter(name)) {
            return "varde gali buti tik abeceles simboliai";
        }
        return true;
    }

    static isValidEmail(email) {
        if (!Validation.isNonEmptyText(email)) {
            return "email neturi buti tuscias";
        }
        if (!Validation.noSpacesAround(email)) {
            return "email priekyje ir gale negali buti tarpu";
        }
        if (!Validation.textContainsLetter(email, "@")) {
            return "email turi tureti viena @ simboli";
        }
        const emailParts = email.split("@");
        if (!Validation.isNonEmptyText(emailParts[0])) {
            return "email lokali dalis turi buti ne tuscia";
        }
        if (!Validation.isNonEmptyText(emailParts[1])) {
            return "email domeno dalis turi buti ne tuscia";
        }
        return true;
    }

    static isValidText(text) {
        if (!Validation.isNonEmptyText(text)) {
            return "textas neturi buti tuscias";
        }
        return true;
    }
    static isNonEmptyText(text) {
        if (typeof text !== "string" ||
            text === "") {
            return false;
        }
        return true;
    }

    static isSingleWord(text) {
        return !text.includes(" ");
    }
    static isFirstLetterUppercase(text) {
        return text[0] === text[0].toUpperCase();
    }
    static noSpacesAround(text) {
        return text === text.trim();
    }
    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }
    static textContainsLetter(text, letter, count = 1) {
        let letterCount = 0;
        letterCount = text.split("").filter(symbol => symbol === letter).length;
        return letterCount === count;
    }
    static onlyAphabetLetter(text) {
        const uppercase = text.toUpperCase();
        const lowercase = text.toLowerCase();
        const size = text.length;
        for (let i = 0; i < size; i++) {
            if (uppercase[i] === lowercase[i]) {
                return false;
            }
        }
        return true;
    }
}

export { Validation }