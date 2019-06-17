import React from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';
import Particles from 'react-particles-js';


const particleParams = {
  particles: {
    number: {
        value: 70,
        density: {
          enable: true,
          value_area: 500
        }
      }
    }
  }

function App() {
  return (
    <div className="App">
          <Particles className='particles' params={particleParams} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm />
    </div>
  );
}

export default App;
