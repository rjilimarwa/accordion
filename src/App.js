import React, { useState } from 'react';
import data from './data.js';
import "./App.css";
import SingleQuestion from './Question';
function App() {
    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className='container'>
                <h3> Reactjs questions and answers</h3>
                <section className='info'>
                    {questions.map((question) => {
                        return (
                            <SingleQuestion key={question.id} {...question}></SingleQuestion>
                        );
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;