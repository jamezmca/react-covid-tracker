import React, { useEffect, useState } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import coronaImage from './images/corona.png'

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')
  useEffect(() => {
    async function run() {
      const fetchedData = await fetchData()
      setData(fetchedData)
    }
    run()
  }, [])

  async function handleCountryChange(country) {
    //fetch the data
    const fetchedData = await fetchData(country)
    //set the state
    setData(fetchedData)
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="corona"/>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>

    </div>
  );
}

export default App;
