const App = () => {
  
  const course = 'Half Stack application development'
  const content = [
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

  return (
    <div>
      <Header course={course} />
      <Content content={content}/> 
     <p>Number of exercises {content.reduce((sum, item) => sum + item.exercises, 0)}</p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  console.log(props)
  
  return (
    <ul>
      {props.content.map((i, j) => (
        <p key={j}>
          {i.name} {i.exercises}
        </p>
      ))}
    </ul>
  )
}

export default App