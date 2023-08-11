import React from 'react';
import "./top.css";

export default function Top({onCityChange, onCountryChange }) {
  return (
    <div className='container parent'>
      <h1 className="display-2 text-center mt-5 h1mob" style={{color:'#3a9188', textDecoration:'underline #062925'}}>Praying Timings</h1>
      <div className="mt-5 d-flex justify-content-evenly mob">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter City"
          style={{ fontFamily: "Georgia" }}
          className="p-3 rounded fs-2"
          onChange={onCityChange}
        />
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Enter Country"
          style={{ fontFamily: "Georgia" }}
          className="p-3 rounded fs-2"
          onChange={onCountryChange}
        />
      </div>
    </div>
  );
}
