import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import MenuSwitch from './components/MenuSwitch'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const countryHook = () => {
    console.log('fetching countries')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
    })
  }
  useEffect(countryHook, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filteredCountries = !newFilter
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <SearchBar newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <MenuSwitch filteredCountries={filteredCountries} handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
