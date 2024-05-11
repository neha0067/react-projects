import React, { useState } from 'react';
import axios from "axios";

function App() {

const [longUrl, setLongUrl] = useState('');
const [shortenedUrl, setShortenedUrl] = useState('');

const url = 'https://api-ssl.bitly.com/v4/shorten';
const token = '07c493cc235b3cc2b749a58c68ee210514c71dc9';

const body = {
    "group_guid": "Bo12fDYmOiU",
    "domain": "bit.ly",
    "long_url": longUrl
}

const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
}

async function handleSubmit(e) {
  e.preventDefault();
  const response = await axios.post(url, body, config);
  setShortenedUrl(response.data.link);
}

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit} className=''>
        <input type='text' value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder='Enter the URL'></input>
        <div>
          {longUrl && <button className='bg-black'>Shorten</button>}
        </div>
      </form>
      <div>
        {shortenedUrl.length > 0 &&
          <div>
            <p>Your shortened link: </p>
              <p>{shortenedUrl}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
