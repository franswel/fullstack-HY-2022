const SearchMenu = ({name, handleFilterChange}) => {
    return (
        <div>
            {name}
            <button
                type="submit"
                value={name}
                onClick={handleFilterChange}>show
            </button>
        </div>
    )
}

export default SearchMenu