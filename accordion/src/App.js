import React from 'react';
import './index.css';
import Questions from './Components/Questions';
import questions from "./Data";

function App() {


  return (
    <main className='wholeSection'>


      <h1>Questions</h1>
      <div className='allQuestions'>
        {questions.map((question) => {
          return (
            <Questions
              key={question.id}
              title={question.title}
              info={question.info}
            />
          )
        })}  
      </div>   
      
    </main>

  );
}

export default App;
