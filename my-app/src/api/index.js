import axios from 'axios';

const URL = "https://covid19.mathdro.id/api"
const URL_Chart = "https://covid19.mathdro.id/api/daily"
const URL_Countries = "https://covid19.mathdro.id/api/countries"


export const fetchData = async () => {
    const res = await axios.get(URL);
    return res.data
}

export const fetchChartData = async () => {
    const res = await axios.get(URL_Chart);
    return res.data
}

export const fetchCountriesData = async () => {
    const res = await axios.get(URL_Countries);
    return res.data.countries;
};

export const fetchCountryData = async function(country){
    const res = await axios.get(URL+`/countries/${country}`);
    return res.data
}


