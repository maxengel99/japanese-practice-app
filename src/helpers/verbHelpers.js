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
};

const VerbTypes = {
    RU: 'RU',
    U: 'U',
};

const VerbDegrees = {
    POSITIVE: 'POSITIVE',
    NEGATIVE: 'NEGATIVE',
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


const generatePresentForm = (verb, verbDegree) => {
    if (verb.type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return verb.word;
        }
        else {
            return verb.word.substring(0, verb.word.length - 1) + 'ない';
        }
    }
    else {
        if (verbDegree == verbDegree.POSITIVE) {
            return verb.word;
        }
        else {
            return verb.word.substring(0, verb.word.length - 1) + toMaLetter[verb.word[verb.word.length - 1]] + 'ない';
        }
    }
}

const generatePastForm = (verb, verbDegree) => {
    if (verb.type === VerbTypes.RU) {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return verb.word.substring(0, verb.word.length - 1) + 'た';
        }
        else {
            return verb.word.substring(0, verb.word.length - 1) + 'なかった';
        }
    }
    else {
        if (verbDegree === VerbDegrees.POSITIVE) {
            return verb.word.substring(0, verb.word.length - 1) + 'んだ';
        }
        else {
            return verb.word.substring(0, verb.word.length - 1) + toMaLetter[verb.word[verb.word.length - 1]] + 'なかった';
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
};

export {
    VerbForms,
    VerbDegrees,
    Verbs,
    generateExpectedAnswer,
};
