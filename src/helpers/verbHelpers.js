import { toAhLetter, toOhLetter, toEhLetter, toTeLetters, toPastLetters } from './LetterMappings';

const VERB_FORMS = {
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

const VerbsDegreeIndependent = [VERB_FORMS.VOLITIONAL, VERB_FORMS.CONDITIONAL];

const VERB_TYPES = {
    RU: 'RU',
    U: 'U',
};

const VERB_DEGREES = {
    POSITIVE: 'POSITIVE (+)',
    NEGATIVE: 'NEGATIVE (-)',
};

const getRootForm = (verb) => verb.word.substring(0, verb.word.length - 1);

const generatePresentForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VERB_TYPES.RU) {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
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
    if (type === VERB_TYPES.RU) {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
            return  getRootForm(verb) + 'た';
        }
        else {
            return  getRootForm(verb) + 'なかった';
        }
    }
    else {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
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
    if (type === VERB_TYPES.RU) {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
            return  getRootForm(verb) + 'て';
        }
        else {
            return getRootForm(verb)+ 'なくて';
        }
    }
    else {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
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
    if (type === VERB_TYPES.RU) {
        return getRootForm(verb) + 'よう';
    }
    else {
        return getRootForm(verb) + toOhLetter[word[word.length - 1]] + 'う';
    }
};

const generatePotentialForm = (verb, verbDegree) => {
    const word = verb.word;
    const type = verb.type;
    if (type === VERB_TYPES.RU) {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
            return getRootForm(verb) + 'られる';
        }
        else {
            return getRootForm(verb) + 'られない';
        }
    }
    else {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
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
    if (type === VERB_TYPES.RU) {
        return generatePotentialForm(verb, verbDegree);
    }
    else {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
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
    if (type === VERB_TYPES.RU) {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
            return getRootForm(verb) + 'させる';
        }
        else {
            return getRootForm(verb) + 'させない';
        }
    }
    else {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
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
    if (type === VERB_TYPES.RU) {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
            return getRootForm(verb) + 'ろ';
        }
        else {
            return verb.word + 'な';
        }
    }
    else {
        if (verbDegree === VERB_DEGREES.POSITIVE) {
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
    if (type === VERB_TYPES.RU) {
        return getRootForm(verb) + 'たら';
    }
    else {
        return getRootForm(verb) + toPastLetters[word[word.length - 1]] + 'ら';
    }
}

const generateExpectedAnswer = (verb, verbForm, verbDegree) => {
    if (verbForm === VERB_FORMS.PRESENT) {
        return generatePresentForm(verb, verbDegree);
    }
    else if (verbForm === VERB_FORMS.PAST) {
        return generatePastForm(verb, verbDegree);
    }
    else if (verbForm === VERB_FORMS.TE) {
        return generateTeForm(verb, verbDegree);
    }
    else if (verbForm === VERB_FORMS.VOLITIONAL) {
        return generateVolitionalForm(verb);
    }
    else if (verbForm === VERB_FORMS.POTENTIAL) {
        return generatePotentialForm(verb, verbDegree);
    }
    else if (verbForm === VERB_FORMS.PASSIVE) {
        return generatePassiveForm(verb, verbDegree);
    }
    else if (verbForm === VERB_FORMS.CAUSATIVE) {
        return generateCausativeForm(verb, verbDegree);
    }
    else if (verbForm === VERB_FORMS.IMPERATIVE) {
        return generateImperativeForm(verb, verbDegree);
    }
    else if (verbForm === VERB_FORMS.CONDITIONAL) {
        return generateConditionalForm(verb);
    }
};

export {
    VERB_FORMS,
    VerbsDegreeIndependent,
    VERB_DEGREES,
    generateExpectedAnswer,
    VERB_TYPES
};
