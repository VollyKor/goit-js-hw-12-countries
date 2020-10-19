

// async function  fetchCountries (searchCountry) {
//     const url = `https://restcountries.eu/rest/v2/name/${searchCountry}`

//     fetch(url)
//         .then(res => res.json())
//         .then(countryList => countryList)
//         .catch((err)=> {
//             throw err
//         })
//         return countryList
// }

async function fetchCountries (searchCountry) {
    const url = `https://restcountries.eu/rest/v2/name/${searchCountry}`
    
    try {
        const response = await fetch(url)
        const countryList = response.json()
        return countryList
        
    } catch (error) {
        console.dir(error);
        // throw error
    }
}

export default fetchCountries;