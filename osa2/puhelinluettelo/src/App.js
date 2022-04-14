import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import SearchBar from './components/SearchBar'
import personService from './services/PersonService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }
  
  useEffect(hook, [])


  const addName = (event) => {
    event.preventDefault()
    const duplicate = persons.find(element => element.name === newName)

    if (duplicate) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = {...duplicate, number: newNumber}
        console.log("changing number...")
        personService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(i => i.id !== changedPerson.id ? i : returnedPerson))
          })
          .catch((error) => {
            setNotification({
              text: `Information of '${duplicate.name}' has already been removed from server`,
              type: 'failure'
            })
          })
          setPersons(persons.filter(n => n.id !== duplicate.id))
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          
        setPersons(persons.filter(n => n.id !== duplicate.id))
        setNotification({
          text: `Updated ${duplicate.name}`,
          type: 'success'
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        setNotification({
          text: `Added ${newName}`,
          type: 'success'
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      
    }
    setNewFilter('')
    setNewName('')
    setNewNumber('')
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleDeletion = (event) => {
    const person = persons.find(i => i.name === event.target.value)
    console.log(`Trying to delete ${person}`)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .annul(person.id)
      setPersons(persons.filter(n => n.id !== person.id))
      setNotification({
        text: `Deleted ${person.name}`,
        type: 'success'
      })
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const filteredPersons = !newFilter
    ? persons
    : persons.filter((persons) => 
      persons.name.toLowerCase().includes(newFilter.toLowerCase())
    ) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <SearchBar newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDeletion={handleDeletion}/>
    </div>
  )
}

export default App