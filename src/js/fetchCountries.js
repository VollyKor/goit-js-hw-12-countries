import {notFoundError} from './notification'

function fetchCountries(searchCountry) {
    const url = `https://restcountries.eu/rest/v2/name/${searchCountry}`

   return fetch(url)
        .then(res => res.json())
        .then(countryList => countryList)
        // .catch(notFoundError())
}
export default fetchCountries;