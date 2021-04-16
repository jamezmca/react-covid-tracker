import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export async function fetchData() {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
        return { confirmed, recovered, deaths, lastUpdate }

    } catch (err) {
        console.log(err)
    }
}

/*could also be:
      const modifiedData = {
          confirmed,
          recovered,
          deaths,
          lastUpdate
      }
      return modifiedData
      works because if the name is the value and the key, auto inputs as both
      */

export async function fetchDailyData() {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData
    } catch (err) {
        console.log(err)
    }
}