import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const course = {
    name: 'Half stack application development',
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const courseParts = props.course.parts
  const items = []
  for(const [index, value] of courseParts.entries()) {
    items.push(<p key={index}>{value.name} {value.exercises}</p>)
  }
  return (
    <div>
      { items }
    </div>
  )
}

const Total = (props) => {
  const courseParts = props.course.parts
  let total = 0

  courseParts.forEach(function(value, index) {
    total += value.exercises
  })

  return (
    <p>Number of exercises {total}</p>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);