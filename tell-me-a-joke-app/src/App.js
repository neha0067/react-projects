import React, { useState } from "react";
import axios from "axios";

function App() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  const url = "https://official-joke-api.appspot.com/jokes/random";

  async function showTheJoke() {
    const response = await axios.get(url);
    console.log(response);
    setSetup(response.data.setup)
    setPunchline(response.data.punchline)
  }

  return (
    <section>
      <button onClick={showTheJoke}>TELL ME A JOKE</button>
      <div>
        {setup && (
          <div>
            <p>{setup}</p>
            <p>{punchline}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
