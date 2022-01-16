import React from 'react';
import { useState, useEffect } from 'react';
import { VerbsDegreeIndependent, VERB_FORMS, VERB_DEGREES, generateExpectedAnswer } from '../helpers/verbHelpers';
import { QUESTION_STATES } from '../helpers/QuestionStates';
import { Verbs } from '../helpers/VerbsList';
import './ConjugationPractice.scss';

const getRandomElement = (elements) => elements[Object.keys(elements)[Math.floor(Math.random() * Object.keys(elements).length)]];

export const ConjugationPractice = () => {    
    const [verb, setVerb] = useState(getRandomElement(Verbs));
    const [verbForm, setVerbForm] = useState(getRandomElement(VERB_FORMS));
    const [verbDegree, setVerbDegree] = useState(getRandomElement(VERB_DEGREES));
    const [expectedAnswer, setExpectedAnswer] = useState(generateExpectedAnswer(verb, verbForm, verbDegree));
    const [questionState, setQuestionState] = useState(QUESTION_STATES.ASK);
    const [input, setInput] = useState('');

    const changeInput = e => {
        setInput(e.target.value);
    };

    const resetState = () => {
        setVerb(getRandomElement(Verbs));
        setVerbForm(getRandomElement(VERB_FORMS));
        setVerbDegree(getRandomElement(VERB_DEGREES));
        setQuestionState(QUESTION_STATES.ASK);
        setInput('');
    }

    useEffect(() => {
        setExpectedAnswer(generateExpectedAnswer(verb, verbForm, verbDegree));
    }, [verb, verbForm, verbDegree]);

    const onKeyPress = e => {
        e.preventDefault();
        if (e.key === 'Enter') {
            if (questionState === QUESTION_STATES.ASK) {
                if (input === expectedAnswer) {
                    setQuestionState(QUESTION_STATES.CORRECT);
                }
                else {
                    setQuestionState(QUESTION_STATES.WRONG);
                }   
            }
            else {
                resetState();
            }
        }
    };

    const getHeader = (verb, verbForm, verbDegree) => {
        if (VerbsDegreeIndependent.includes(verbForm)) {
            return `${verb.word} - ${verbForm} form`;
        }
        else {
            return `${verb.word} - ${verbForm} ${verbDegree} form`;
        }
    };

    return (
        <div>
            <h3 className='question'>{getHeader(verb, verbForm, verbDegree)}</h3>
            <input type="text" onChange={changeInput} value={input} onKeyPress={onKeyPress} />
            {questionState === QUESTION_STATES.CORRECT && <h4 className='correct-answer'>Correct!!!</h4>}
            {questionState === QUESTION_STATES.WRONG && <h4 className='incorrect-answer'>Incorrect - should be {expectedAnswer}</h4>}
        </div>
    );
};