import React from 'react';
import { useState } from 'react';
import { Verbs, VerbForms, VerbDegrees, generateExpectedAnswer, } from '../helpers/verbHelpers';

export const ConjugationPractice = () => {
    const [verb, setVerb] = useState(Verbs[Object.keys(Verbs)[Math.floor(Math.random() * Object.keys(Verbs).length)]]);
    const [verbForm, setVerbForm] = useState(VerbForms[Object.keys(VerbForms)[Math.floor(Math.random() * Object.keys(VerbForms).length)]]);
    const [verbDegree, setVerbDegree] = useState(VerbDegrees[Object.keys(VerbDegrees)[Math.floor(Math.random() * Object.keys(VerbDegrees).length)]]);
    const [expectedAnswer, setExpectedAnswer] = useState(generateExpectedAnswer(verb, VerbForms.PRESENT, verbDegree));
    const [input, setInput] = useState('');

    const changeInput = e => {
        setInput(e.target.value);
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            if (input === expectedAnswer) {
                console.log('correct answer');
            }
            else {
                console.log('wrong');
            }
        }
    }
    return (
        <div>
            <h3>{verb.word} - {verbForm} form</h3>
            <input type="text" onChange={changeInput} value={input} onKeyPress={onKeyPress} />
        </div>
    );
};