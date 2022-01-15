import React from 'react';
import { useState, useEffect } from 'react';
import { Verbs, VerbForms, VerbDegrees, generateExpectedAnswer, } from '../helpers/verbHelpers';
import './ConjugationPractice.scss';

export const ConjugationPractice = () => {
    const getRandomElement = (elements) => elements[Object.keys(elements)[Math.floor(Math.random() * Object.keys(elements).length)]];
    
    const [verb, setVerb] = useState(getRandomElement(Verbs));
    const [verbForm, setVerbForm] = useState(getRandomElement(VerbForms));
    const [verbDegree, setVerbDegree] = useState(getRandomElement(VerbDegrees));
    const [expectedAnswer, setExpectedAnswer] = useState(generateExpectedAnswer(verb, verbForm, verbDegree));
    const [questionState, setQuestionState] = useState('ASK'); // ask, wrong, correct
    const [input, setInput] = useState('');

    const changeInput = e => {
        setInput(e.target.value);
    };

    const resetState = () => {
        setVerb(getRandomElement(Verbs));
        setVerbForm(getRandomElement(VerbForms));
        setVerbDegree(getRandomElement(VerbDegrees));
        setQuestionState('ASK');
        setInput('');
    }

    useEffect(() => {
        setExpectedAnswer(generateExpectedAnswer(verb, verbForm, verbDegree));
    }, [verb, verbForm, verbDegree]);

    const onKeyPress = e => {
        e.preventDefault();
        if (e.key === 'Enter') {
            if (questionState === 'ASK') {
                if (input === expectedAnswer) {
                    setQuestionState('CORRECT');
                }
                else {
                    setQuestionState('WRONG');
                }   
            }
            else {
                resetState();
            }
        }
    }
    return (
        <div>
            <h3 className='question'>{verb.word} - {verbForm} {verbDegree} form</h3>
            <input type="text" onChange={changeInput} value={input} onKeyPress={onKeyPress} />
            {questionState === 'CORRECT' && <h4 className='correct-answer'>Correct!!!</h4>}
            {questionState === 'WRONG' && <h4 className='incorrect-answer'>Incorrect - should be {expectedAnswer}</h4>}
        </div>
    );
};