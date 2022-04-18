<<<<<<< HEAD
const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={message.type}>
        {message.text}
      </div>
    )
}

=======
const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={message.type}>
        {message.text}
      </div>
    )
}

>>>>>>> 4f9cb5e9e5c39972d2d1fd265e7790aed9e1e16c
export default Notification