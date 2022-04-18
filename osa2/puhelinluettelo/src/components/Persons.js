<<<<<<< HEAD
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

=======
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

>>>>>>> 4f9cb5e9e5c39972d2d1fd265e7790aed9e1e16c
export default Persons