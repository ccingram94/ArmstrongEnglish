'use client';
import { useState } from 'react';

function DisplayTest( currentQuestion ) {
    const [ started, startTest ] = useState(false);
    const [ finished, finishTest ] = useState(false);
    const [ score, setScore ] = useState(0);
    
    const questiondata = currentQuestion.currentQuestion;

    function selectAnswer(answer) {
        console.log(answer)
        if (answer.id == questiondata.correctOptionId) {
            if (questiondata.cefrLevel == 'A1') {
                setScore(score + 5);
            } else if (questiondata.cefrLevel == 'A2') {
                setScore(score + 10);
            } else if (questiondata.cefrLevel == 'B1') {
                setScore(score + 15);
            } else if (questiondata.cefrLevel == 'B2') {
                setScore(score + 20);
            } else if (questiondata.cefrLevel == 'C1') {
                setScore(score + 25);
            } else if (questiondata.cefrLevel == 'C2') {
                setScore(score + 30);
            }
            
            console.log(score)
        }
    }
    
    if (!started && !finished) {
        return (
        <div className='flex flex-col text-center items-center w-screen min-h-screen'>
        <div className='flex flex-col text-center items-center w-full lg:w-2/3 text-violet-900 bg-white rounded-md shadow-xl p-2 m-4'>
            <div className='flex flex-col text-start text-sm items-center rounded-xl'>
                <h3 className='p-2 text-lg font-extrabold'>CEFR Fluency Levels</h3>
                <div className='flex flex-row w-full bg-violet-50'>
                    <p className='p-2 font-extrabold w-1/3'>Beginner</p>
                    <p className='p-2'>A1 (Lower)</p>
                    <p className='p-2'>A2 (Upper)</p>
                </div>
                <div className='flex flex-row w-full bg-violet-100'>
                    <p className='p-2 font-extrabold w-1/3'>Intermediate</p>
                    <p className='p-2'>B1 (Lower)</p>
                    <p className='p-2'>B2 (Upper)</p>
                </div>
                <div className='flex flex-row w-full bg-violet-200'>
                    <p className='p-2 font-extrabold w-1/3'>Advanced</p>
                    <p className='p-2'>C1 (Lower)</p>
                    <p className='p-2'>C2 (Upper)</p>
                </div>
            </div>
            <p className='p-2 m-2 max-w-md text-center'>
                This placement test will provide an English level score on the CEFR scale (beginner, intermediate, or advanced).
                It will test your reading, writing, and grammar knowledge.  
                It is 30 questions long and untimed.
            </p>
            <p>
                Good luck!
            </p>
            <button onClick={() => startTest(true)} className='p-2 m-2 bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold rounded-md shadow-md opacity-80 hover:opacity-100 transition-all'>
                Start Test
            </button>
        </div>
    </div>
        )
    }

    else if (started && !finished) {
        return (
        <div className='flex flex-col text-center items-center w-screen min-h-screen'>
        <div className='flex flex-col text-center items-center w-full lg:w-2/3 text-violet-900 bg-white rounded-md shadow-xl p-2 m-4'>
            <div className='flex flex-col w-full text-start text-sm items-center rounded-xl'>
                <h3 className='p-4 m-2 text-xl font-extrabold'> {questiondata.questionText} </h3>
                <div className='flex flex-row flex-wrap w-full justify-center items-center text-center'>
                    <button onClick={ () => selectAnswer(questiondata.options[0]) } className='w-full lg:w-1/3 p-4 m-2 bg-violet-900 text-white font-bold rounded-md shadow-md opacity-90 hover:opacity-100 transition-all'>
                        { questiondata.options[0].text }
                    </button>
                    <button onClick={ () => selectAnswer(questiondata.options[1]) } className='w-full lg:w-1/3 p-4 m-2 bg-violet-900 text-white font-bold rounded-md shadow-md opacity-90 hover:opacity-100 transition-all'>
                        { questiondata.options[1].text }
                    </button>
                    <button onClick={ () => selectAnswer(questiondata.options[2]) } className='w-full lg:w-1/3 p-4 m-2 bg-violet-900 text-white font-bold rounded-md shadow-md opacity-90 hover:opacity-100 transition-all'>
                        { questiondata.options[2].text }
                    </button>
                    <button onClick={ () => selectAnswer(questiondata.options[3]) } className='w-full lg:w-1/3 p-4 m-2 bg-violet-900 text-white font-bold rounded-md shadow-md opacity-90 hover:opacity-100 transition-all'>
                        { questiondata.options[3].text }
                    </button>
                </div>
            </div>
            <p className='font-bold opacity-50 p-2 m-4'>
                Question {questiondata.id} of 30
            </p>
        </div>
    </div>
        )
    }

    else if (started.started && finished.finished) {
        return (
            <div className='flex flex-col text-center items-center w-screen min-h-screen'>
            <div className='flex flex-col text-center items-center w-full lg:w-2/3 text-violet-900 bg-white rounded-md shadow-xl p-2 m-4'>
                <div className='flex flex-col w-full text-start text-sm items-center rounded-xl'>
                    <h3 className='p-4 m-2 text-xl font-extrabold'>Results </h3>
                    <div className='flex flex-row flex-wrap w-full justify-center items-center text-center'>
                        <p>Your CEFR Level is A1 (Lower Beginner)</p>
                    </div>
                </div>
                <p className='font-bold opacity-50 p-2 m-4'>
                    Question 1 of 30
                </p>
            </div>
        </div> 
        )
    }
}

function PlacementTest( questions ) {
    const [ questionNum, setQuestionNum ] = useState(0)
    const currentQuestion = questions.questions[questionNum];

    return (
        <div className='flex flex-col text-center items-center w-screen min-h-screen'>
            <div className='flex flex-col text-center items-center w-full lg:w-2/3 text-violet-900 bg-white rounded-md shadow-xl p-2 m-4'>
                <DisplayTest currentQuestion={currentQuestion} />
            </div>
        </div>
    )

}

export default PlacementTest;