
const state = {};

function init() {
    $("#searchAction").on("click", searchAction)
}

function searchAction() {
    const code = $("#search").val();
    api.getCountryByCode(code).then((res) => {
        const currentCountry = {
            ...res, languages: res.languages.map(lang => lang.iso639_1)
        }
        state[code] = { country: currentCountry }
        getAllcountriesByLanguages(currentCountry.languages, code)

    }).catch(res => console.log(err))
}

function getAllcountriesByLanguages(langArray, code) {
    console.log(langArray)
    const promises = langArray.map(lang2Code => api.getCountriesByLanguages(lang2Code))

    Promise.all(promises).then(arrayOfArrays => {
        const mergedResult = arrayOfArrays.reduce((initArray, currentArray) => {
            return [...initArray, ...currentArray]
        }, [])

        const flags = mergedResult.reduce((countriesObj, country) => {
            return { ...countriesObj, [country.name]: country.flag }
        }, {})


        state[code].flags = flags;
        draw(flags)

    }).catch(err => console.error("error with one of the languages"))
}


function draw(flags) {
    Object.entries(flags).map(([key, value]) => {
        const clonedCard = $("#cardCountry").clone();
        clonedCard.find("img").attr({ src: value });
        clonedCard.css({ display: "inline-block" });
        clonedCard.find("#title").html(key);
        $("#content").append(clonedCard);
    })


}


init();


