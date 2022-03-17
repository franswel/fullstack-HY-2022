import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0)) 
  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)


  const handleAnecdote = () => {
    const i = Math.floor(Math.random() * 7)
    setScore(points[i])
    setSelected(i)
  }

  const handleVoting = () => {
    const copy = points
    copy[selected] += 1
    const score = copy[selected]
    setPoints(copy)
    setScore(score)
    if (points.every(i => i <= score)) {
      setMostVotes(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {score} votes</p>
      <Button handleClick={handleVoting} text='vote' />
      <Button handleClick={handleAnecdote} text='next anecdote' />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {points[mostVotes]} votes</p>
    </div>
  )
}

export default App
