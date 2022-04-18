const Person = ({name, number, handleDeletion}) => {
  return (
    <p>{name} {number} 
      <button 
      value={name}
      onClick={handleDeletion}>
      delete</button>
    </p>
  )
}

export default Person