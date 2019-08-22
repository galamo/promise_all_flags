const config = {
    alpha3codeUrl: "https://restcountries.eu/rest/v2/alpha",
    langaugeUrl: "https://restcountries.eu/rest/v2/lang"
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
    }
}

// execute getCountryByCode => api.getCountryByCode("isr")

