import Person from './Person'

const Persons = ({filteredPersons, handleDeletion}) => {
    return (
      <div>
        {filteredPersons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} handleDeletion={handleDeletion}/>
        )}
      </div>
    )
}

export default Persons