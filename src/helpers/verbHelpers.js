import { toAhLetter, toOhLetter, toEhLetter, toTeLetters } from './LetterMappings';

/**const VerbForms = {
    PASSIVE: 'PASSIVE',
    CAUSATIVE: 'CAUSATIVE',
    IMPERATIVE: 'IMPERATIVE',
    CONDITIONAL: 'CONDITIONAL',
};**/

const VerbForms = {
    PRESENT: 'PRESENT',
    PAST: 'PAST',
    TE: 'TE',
    VOLITIONAL: 'VOLITIONAL',
    POTENTIAL: 'POTENTIAL',
};

const VerbsDegreeIndependent = [VerbForms.VOLITIONAL];

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
            return getRootForm(verb)+ 'んだ';
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
};

export {
    VerbForms,
    VerbsDegreeIndependent,
    VerbDegrees,
    generateExpectedAnswer,
    VerbTypes
};
