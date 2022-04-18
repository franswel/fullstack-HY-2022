<<<<<<< HEAD
const PersonForm = (props) => {
    return (
    <form onSubmit={props.addName}>
      <div>
        name: <input
        value={props.newName}
        onChange={props.handleNameChange}
        />
      </div>
      <div>
        number: <input
        value={props.newNumber}
        onChange={props.handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
}

=======
const PersonForm = (props) => {
    return (
    <form onSubmit={props.addName}>
      <div>
        name: <input
        value={props.newName}
        onChange={props.handleNameChange}
        />
      </div>
      <div>
        number: <input
        value={props.newNumber}
        onChange={props.handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
}

>>>>>>> 4f9cb5e9e5c39972d2d1fd265e7790aed9e1e16c
export default PersonForm