const Header = ({header}) => {
    return (
      <div>
        <h2>{header}</h2>
      </div>
    )
}
  
const Total = ({parts}) => {
    const total = parts.reduce( (s,p) =>
      s + p.exercises, 0);
    return (
      <div>
          <b>
            total of {total} exercises
          </b>
      </div>
    )
}
  
const Content = ({content}) => {
    return (
      <div>
        {content.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </div>
    )
}
  
const Part = (props) => {
    return (
      <div>
        <p>
          {props.name} {props.exercises}
        </p>
      </div>
    )
}
  
const Course = ({course}) => {
    return (
      <div>
        <Header header={course.name} />
        <Content content={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

export default Course
