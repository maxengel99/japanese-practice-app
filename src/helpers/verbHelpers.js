import { toAhLetter, toOhLetter, toEhLetter, toTeLetters, toPastLetters } from './LetterMappings';

const VerbForms = {
    PRESENT: 'PRESENT',
    PAST: 'PAST',
    TE: 'TE',
    VOLITIONAL: 'VOLITIONAL',
    POTENTIAL: 'POTENTIAL',
    PASSIVE: 'PASSIVE',
    CAUSATIVE: 'CAUSATIVE',
    IMPERATIVE: 'IMPERATIVE',
    CONDITIONAL: 'CONDITIONAL',
};

const VerbsDegreeIndependent = [VerbForms.VOLITIONAL, VerbForms.CONDITIONAL];

const VerbTypes = {
    RU: 'RU',
    U: 'U',
};

const VerbDegrees = {
    POSITIVE: 'POSITIVE (+)',
    NEGATIVE: 'NEGATIVE (-)',
};

const getRootForm = (verb) => verb.word.substring(0, verb.word.length - 1);

const generatePresentForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return word;
        }
        else {
            return getRootForm(verb) + 'ない';
        }
    }
    else {
        if (verbDegree === verbDegree.POSITIVE) {
            return word;
        }
        else {
            return getRootForm(verb) + toAhLetter[word[word.length - 1]] + 'ない';
        }
    }
}

const generatePastForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return  getRootForm(verb) + 'た';
        }
        else {
            return  getRootForm(verb) + 'なかった';
        }
    }
    else {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb)+ toPastLetters[word[word.length - 1]];
        }
        else {
            return getRootForm(verb) + toAhLetter[word[word.length - 1]] + 'なかった';
        }
    }
}

const generateTeForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return  getRootForm(verb) + 'て';
        }
        else {
            return getRootForm(verb)+ 'なくて';
        }
    }
    else {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + toTeLetters[word[word.length - 1]];
        }
        else {
            return getRootForm(verb) + toAhLetter[word[word.length - 1]] + 'なくて';
        }
    }
}

const generateVolitionalForm = (verb) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        return getRootForm(verb) + 'よう';
    }
    else {
        return getRootForm(verb) + toOhLetter[word[word.length - 1]] + 'う';
    }
};

const generatePotentialForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + 'られる';
        }
        else {
            return getRootForm(verb) + 'られない';
        }
    }
    else {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + toEhLetter[word[word.length - 1]] + 'る';
        }
        else {
            return getRootForm(verb) + toEhLetter[word[word.length - 1]] + 'ない';
        }
    }
};

const generatePassiveForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        return generatePotentialForm(verb, verbDegree);
    }
    else {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + toAhLetter[word[word.length - 1]] + 'れる';
        }
        else {
            return getRootForm(verb) + toAhLetter[word[word.length - 1]] + 'れない';
        }
    }
};

const generateCausativeForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + 'させる';
        }
        else {
            return getRootForm(verb) + 'させない';
        }
    }
    else {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + toAhLetter[word[word.length - 1]] + 'せる';
        }
        else {
            return getRootForm(verb) + toAhLetter[word[word.length - 1]] + 'せない';
        }
    }
};

const generateImperativeForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + 'ろ';
        }
        else {
            return verb.word + 'な';
        }
    }
    else {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return getRootForm(verb) + toEhLetter[word[word.length - 1]];
        }
        else {
            return verb.word + 'な';
        }
    }
};

const generateConditionalForm = (verb) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VerbTypes.RU) {
        return getRootForm(verb) + 'たら';
    }
    else {
        return getRootForm(verb) + toPastLetters[word[word.length - 1]] + 'ら';
    }
}

const generateExpectedAnswer = (verb, verbForm, verbDegree) => {
    if (verbForm === VerbForms.PRESENT) {
        return generatePresentForm(verb, verbDegree);
    }
    else if (verbForm === VerbForms.PAST) {
        return generatePastForm(verb, verbDegree);
    }
    else if (verbForm ===　VerbForms.TE) {
        return generateTeForm(verb, verbDegree);
    }
    else if (verbForm === VerbForms.VOLITIONAL) {
        return generateVolitionalForm(verb);
    }
    else if (verbForm === VerbForms.POTENTIAL) {
        return generatePotentialForm(verb, verbDegree);
    }
    else if (verbForm === VerbForms.PASSIVE) {
        return generatePassiveForm(verb, verbDegree);
    }
    else if (verbForm === VerbForms.CAUSATIVE) {
        return generateCausativeForm(verb, verbDegree);
    }
    else if (verbForm === VerbForms.IMPERATIVE) {
        return generateImperativeForm(verb, verbDegree);
    }
    else if (verbForm === VerbForms.CONDITIONAL) {
        return generateConditionalForm(verb);
    }
};

export {
    VerbForms,
    VerbsDegreeIndependent,
    VerbDegrees,
    generateExpectedAnswer,
    VerbTypes
};
