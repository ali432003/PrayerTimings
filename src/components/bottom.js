import React, { useEffect, useState } from 'react';

export default function Bottom(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.city && props.country) {
      fetch(`https://api.aladhan.com/v1/timingsByCity?city=${props.city}&country=${props.country}&method=8`)
        .then((result) => {
          result.json().then((resp) => {
            setData(resp.data);
          });
        });
    }
  }, [props.city, props.country]);

  // console.log(data);

  if (!props.city || !props.country) {
    return <div  className='text-center mt-5 fs-3'>Please enter a city and country to fetch timings.</div>;
  }

  return (
    <div className="container mt-5">
      <main>
        <h2 className="display-6 text-center mb-4 h1mob" style={{ fontFamily: 'Georgia' ,color:'#000',textShadow:'2px 4px 4.5px #757575', textDecoration:'underline #3a9188'}}>Timing Chart</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: '34%' }}></th>
                <th style={{ width: '22%' }}>Time(24H format)</th>
                <th style={{ width: '22%' }}>Date</th>
                <th style={{ width: '22%' }}>Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start fs-3">Fajr</th>
                <td>{data && data.timings.Fajr}</td>
                <td>{data && data.date.readable}</td>
                <td>{data && new Date(data.date.timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start fs-3">Dhuhr</th>
                <td>{data && data.timings.Dhuhr}</td>
                <td>{data && data.date.readable}</td>
                <td>{data && new Date(data.date.timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start fs-3">Asr</th>
                <td>{data && data.timings.Asr}</td>
                <td>{data && data.date.readable}</td>
                <td>{data && new Date(data.date.timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start fs-3">Maghrib</th>
                <td>{data && data.timings.Maghrib}</td>
                <td>{data && data.date.readable}</td>
                <td>{data && new Date(data.date.timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start fs-3">Isha</th>
                <td>{data && data.timings.Isha}</td>
                <td>{data && data.date.readable}</td>
                <td>{data && new Date(data.date.timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start fs-3">Sunrise</th>
                <td>{data && data.timings.Sunrise}</td>
                <td>{data && data.date.readable}</td>
                <td>{data && new Date(data.date.timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
