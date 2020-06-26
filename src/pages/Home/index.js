import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [type, setType] = useState('MP3');
  const serverURL = 'http://localhost:4000';


  function redirectMp3(query) {
	window.location.href = `${serverURL}/downloadmp3?url=${query}`;
}
 
function redirectMp4(query) {
	window.location.href = `${serverURL}/downloadmp4?url=${query}`;
}

  async function getUser(e) {
    e.preventDefault();
    try {
      console.log(userInput);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=id&q=${userInput}&type=video&key=AIzaSyB_mcByvLmKA5EUfG3w62g2E2eUSSBGHZA`
      );
      const url = `https://www.youtube.com/watch?v=${response.data.items[0].id.videoId}`
      
      console.log(type)
      if(type === 'MP3') {
        redirectMp3(url)
      }
      if(type === 'MP4') {
        redirectMp4(url)
      }
      console.log(url);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div className='container'>
        <h1>Music Donwloader</h1>
        <form onSubmit={getUser}>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder='type the music name'
          />
          <select>
                <option value={type} onChange={(e) => setType(e.target.value)}>MP3</option>
                <option value={type} onChange={(e) => setType(e.target.value)}>MP4</option>
          </select>
          <button type='submit' className='button'>
            Download
          </button>
        </form>
      </div>
    </div>
  );
}
