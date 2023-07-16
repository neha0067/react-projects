import React from 'react';
import './App.css';
import text from './data';

function App() {

  const [count, setCount] = React.useState(0);

  const [data, setData] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setData(text.slice(0, count))
  }

  return (
    <div>
      <section>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <form onSubmit={handleSubmit}>
          <label>Paragraphs:</label>
          <input type='number' name='amount' id='amount' step='1' min='1' max={text.length} onChange={(e) => setCount(e.target.value)}></input>
          <button>Generate</button>
        </form>
        <article>
          {data.map((el, index) => {
            return (
              <>
                <div key={index}>{el}</div>
                <br />
              </>
            )
          })}
        </article>
      </section>
    </div>
  );
}

export default App;
