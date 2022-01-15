/**const VerbForms = {
    PRESENT: 'PRESENT',
    PAST: 'PAST',
    TE: 'TE',
    VOLITIONAL: 'VOLITIONAL',
    POTENTIAL: 'POTENTIAL',
    PASSIVE: 'PASSIVE',
    CAUSATIVE: 'CAUSATIVE',
    IMPERATIVE: 'IMPERATIVE',
    CONDITIONAL: 'CONDITIONAL',
};**/

const VerbForms = {
    PRESENT: 'PRESENT',
    PAST: 'PAST',
    TE: 'TE',
};

const VerbTypes = {
    RU: 'RU',
    U: 'U',
};

const VerbDegrees = {
    POSITIVE: 'POSITIVE (+)',
    NEGATIVE: 'NEGATIVE (-)',
};

const Verbs = {
    食べる: {
        word: '食べる',
        type: VerbTypes.RU,
    },
    飲む: {
        word: '飲む',
        type: VerbTypes.U,
    },
};;

const toILetter = {
    む: 'み',
    く: 'き',
    す: 'し',
    つ: 'ち',
    ぬ: 'に',
    る: 'り',
};

const toMaLetter = {
    む: 'ま',
    く: 'か',
    す: 'さ',
    つ: 'た',
    ぬ: 'な',
    る: 'ら',
};

const toTeLetters = {
    く: 'いて',
    す: 'して',
    ぶ: 'んで',
    ぬ: 'んで',
    む: 'んで',
    ぐ: 'いで',
    う: 'って',
    つ: 'って',
    る: 'って',
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
        if (verbDegree == verbDegree.POSITIVE) {
            return word;
        }
        else {
            return getRootForm(verb) + toMaLetter[word[word.length - 1]] + 'ない';
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
            return getRootForm(verb) + toMaLetter[word[word.length - 1]] + 'なかった';
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
            return getRootForm(verb) + toMaLetter[word[word.length - 1]] + 'なくて';
        }
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
};

export {
    VerbForms,
    VerbDegrees,
    Verbs,
    generateExpectedAnswer,
};
