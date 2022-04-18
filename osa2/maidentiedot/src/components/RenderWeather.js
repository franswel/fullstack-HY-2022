const RenderWeather = ({weather, country}) => {
    console.log("rendering weather")
    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <div>temperature {Math.round((weather.main.temp - 273.15) * 10)} Celcius</div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <div>wind {weather.wind.speed} m/s</div>
        </div>
    )
}

export default RenderWeather