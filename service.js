const config = {
    alpha3codeUrl: "https://restcountries.eu/rest/v2/alpha",
    langaugeUrl: "https://restcountries.eu/rest/v2/lang",
    country: "http://10.103.52.25:5000/country"
}

const api = {
    getCountryByCode: (code) => {
        return $.ajax({
            url: `${config.alpha3codeUrl}/${code}`,
            method: "get"
        })
    },
    getCountriesByLanguages: (langauge) => {
        return $.ajax({
            url: `${config.langaugeUrl}/${langauge}`,
            method: "get"
        })
    },
    getCountries: () => {
        return $.ajax({
            url: `${config.country}`,
            method: "get"
        })
    },
    saveCountry: (country) => {
        return $.ajax({
            url: `${config.country}`,
            method: "post",
            data: country
        })
    }


}

// execute getCountryByCode => api.getCountryByCode("isr")

