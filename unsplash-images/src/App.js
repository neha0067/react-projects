import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const clientID = `?client_id=KPdV_ygUJXBnOKTnPKC1VYOEGMmfTwt7X8PjJmHw86Y`;
  const mainUrl = `https://api.unsplash.com/photos/`;
  const searchUrl = `https://api.unsplash.com/search/photos/`;

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  useEffect( () => {
    (async () => {
      const fetchImages = await fetch(`${mainUrl}${clientID}`);
      const response = await fetchImages.json();
      setPhotos(response);
    })();
    
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${searchUrl}${clientID}&query=${query}`);
    let data = await response.json();
    data = data.results.slice(0, 10);

    setPhotos(data);
  }

  return (
    <div>
      <h1>Unsplash Images</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setQuery(e.target.value)}/> 
        <button>Search</button>
      </form>
      <div>
        {
          photos.map((photo) => {
            return <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
          })
        }
      </div>
    </div>
  );
}

export default App;
