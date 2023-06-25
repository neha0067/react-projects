import './App.css';
import Tours from './Components/Tours';
import React from 'react';

function App() {

  const url = 'https://course-api.com/react-tours-project';

  const [tours, setTours] = React.useState([]);

  async function fetchTours() {
    try {
      const response = await fetch(url)
      console.log(response);
      const toursResponse = await response.json();
      setTours(toursResponse);
    } catch (error) {
      console.log(error)
    }
  }

  function removeTour(id) {
    const filteredTours = tours.filter((tour) => {
      return id !== tour.id;
    });
    setTours(filteredTours);
  }

  React.useEffect(() => {
    fetchTours()
  },
    []
  )

  return (
    <div className="App">
      <Tours
        tours={tours}
        removeTour={removeTour}
      />
    </div>
  );
}

export default App;
