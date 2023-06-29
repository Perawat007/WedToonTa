import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import GameAll from './view/SeeGame/GameAll';
import GameDogsila from './view/SeeGame/DogsilaGame/GameDogsila';
import LoginBar from './api/Login';
import axios from './api/axios';
function App() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([])
  const styles = {
    backgroundColor: '#7110af',
  };

  if (!token) {
    return (
      <LoginBar />
    );
  }

  if (token) {
    if (data.length === 0) {
      axios.post("/post/token", '', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {

        })
        .catch(error => {
          localStorage.removeItem("token")
          window.location.href = "/";
          console.log('error', error)
        }
        );
    }
  }

  return (
    <>
      <div className='Home-container'>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/:name" element={<GameAll />} />
            <Route path="/GameDogsila" element={<GameDogsila />} />
          </Routes>
        </div>

      </div>
    </>
  );
}

export default App;
