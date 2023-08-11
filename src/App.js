import React, { useState } from 'react';
import Top from './components/top';
import Bottom from './components/bottom';
import './App.css'

export default function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');



  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="practice">
      <Top
        onCityChange={handleCityChange}
        onCountryChange={handleCountryChange}
      />
      <Bottom city={city} country={country} />
    </div>
  );
}
