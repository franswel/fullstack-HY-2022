const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.partlist[0].exercises + props.partlist[1].exercises + props.partlist[2].exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.partlist[0].name} exercises={props.partlist[0].exercises} />
      <Part part={props.partlist[1].name} exercises={props.partlist[1].exercises} />
      <Part part={props.partlist[2].name} exercises={props.partlist[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content partlist={course.parts} />
      <Total partlist={course.parts} />
    </div>
  )
}

export default App