import { useState, useEffect } from 'react'
import axios from 'axios'
import RenderWeather from './RenderWeather'

const WeatherApi = ({country}) => {
    const [weather, setWeather] = useState([])
    console.log("erer")

    const lat = Math.round(country.capitalInfo.latlng[0])
    const lng = Math.round(country.capitalInfo.latlng[1])
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`

    const weatherHook = () => {
        console.log('fetching weather')
        axios
            .get(api)
            .then(response => {
                console.log('promise fulfilled')
                setWeather(response.data)
        })
    }
    useEffect(weatherHook, [] )

    if (weather.length === 0) {
        return (
            <p>Weather data missing</p>
        )
    }
    return (
        <RenderWeather weather={weather} country={country}/>
    )
    
}

export default WeatherApi