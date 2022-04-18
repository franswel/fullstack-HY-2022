import WeatherApi from './WeatherApi'

const CountryMenu = ({filteredCountries}) => {
    const country = filteredCountries[0]
    return (
        <div>
            <h1>{country.name.common}</h1>
                <div>capital {country.capital}</div>
                <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map((lang, i) =>
                    <li key={i}>{lang}</li>
                )}
            </ul>
            <img src={country.flags.png} />
            <WeatherApi country={country}/>
        </div>
    )

}

export default CountryMenu