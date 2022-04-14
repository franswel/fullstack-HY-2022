import CountryMenu from './CountryMenu'
import SearchMenu from './SearchMenu'

const MenuSwitch = ({filteredCountries, handleFilterChange}) => {
    const isFull = filteredCountries.length > 10
    const isSingle = filteredCountries.length === 1
    return (
        <div>
            {isFull
            ? 'Too many matches, specify another filter'
            : isSingle
                ? <CountryMenu key={filteredCountries} filteredCountries={filteredCountries}/>
                : filteredCountries.map(country => <SearchMenu key={country.name.common} name={country.name.common} handleFilterChange={handleFilterChange}/>)
            }
        </div>
    )
}

export default MenuSwitch