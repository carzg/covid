import React from 'react';
import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker';
import styles from './App.module.css'
import { fetchData, fetchChartData, fetchCountriesData, fetchCountryData } from './api'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            confirmed_value: 0,
            recovered_value: 0,
            deaths_value: 0,
            lastUpdate: '',
            
            confirmed_array: [],
            deaths_array: [],
            date_array: [],

            country: '',
            countries_array: []
        }
    }

    async componentDidMount(){
        let { confirmed, recovered, deaths, lastUpdate } = await fetchData();
        this.setState({
            confirmed_value: confirmed.value,
            recovered_value: recovered.value,
            deaths_value: deaths.value,
            lastUpdate: lastUpdate
        })

        let data = await fetchChartData();
        let confirmed_array = data.map((item)=>(item.totalConfirmed));
        let date_array = data.map((item)=>(item.reportDate));
        let deaths_array = data.map((item)=>(item.deaths.total))
        this.setState({
            confirmed_array: confirmed_array,
            date_array: date_array,
            deaths_array: deaths_array
        })

        let countries = await fetchCountriesData();
        this.setState({countries_array:　countries.map((item)=>(item.name))});
    }

    async handleChange(country){
        this.setState({country: country})
        const countryData = await fetchCountryData(country);
        this.setState({confirmed_value: countryData.confirmed.value});
        this.setState({deaths_value: countryData.deaths.value})
    }

    render() { 
        const { confirmed_value, recovered_value, deaths_value, lastUpdate } = this.state
        const { confirmed_array, date_array, deaths_array } = this.state
        const { countries_array, country } = this.state

        return (
            <div className={styles.container}>
                <Cards 
                    confirmed_value={confirmed_value}
                    recovered_value={recovered_value}
                    deaths_value={deaths_value}
                    lastUpdate={lastUpdate}
                />
                <CountryPicker 
                    handleChange={this.handleChange.bind(this)}
                    country={country}
                    countries={countries_array}
                />
                <Chart 
                    confirmed_array={confirmed_array}
                    date_array={date_array}
                    deaths_array={deaths_array}
                />
            </div>
        );
    }
}
 
export default App;