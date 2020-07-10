import React, { useState, useEffect } from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

import image from './images/image.jpg';
import AllCountries from './components/AllCountries';

export default function App() {
  const [data, setData] = useState({
    data: {},
    country: '',
  });

  /*  //const [newdata, setNewData] = useState({
    data: {},
    country: '',
  });
 */
  useEffect(() => {
    async function fetchData1() {
      const apiresponse = await fetchData();
      setData({ data: apiresponse });
    }

    fetchData1();
  }, []);
  async function handleCountryChange(country) {
    const apiresponse2 = await fetchData(country);

    // eslint-disable-next-line no-undef
    setData({ data: apiresponse2, country });
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data.data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data.data} country={data.country} />
      <AllCountries />
    </div>
  );
}
