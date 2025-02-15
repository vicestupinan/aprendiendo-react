import { useState } from 'react'
import './App.css'
import Mensaje from './Mensaje'

// -----------------------------------------------

// Creacion de nuevos componentes reutilizables

// Creacion de nuevo componente para la descripcion
const Descripcion = () => {
  return <p>Este es un componente reutilizable</p>
}

interface HeaderProps {
  course: string,
}

const Header = ({ course }: HeaderProps) => {
  return (
    <>
      <h1>
        {course}
      </h1>
    </>
  )
}

interface ContentProps {
  part: string,
  exercises: number
}

const Content = ({ part, exercises }: ContentProps) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  )
}

interface TotalProps {
  exercises: number[],
}

const Total = ({ exercises }: TotalProps) => {
  const total = exercises.reduce((sum, num) => sum + num, 0)
  return (
    <>
      <p>
        Number of exercises {total}
      </p>
    </> 
  )
}

const Contador = () => {
  // Creacion de variables para asignacion de estados
  // useState devuelve la variable y una funcion para actualizarla
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleClickReset = () => {
    setCount(0)
  }

  const  isEven = count % 2 === 0

  return (
    <>
      <p>{count}</p>
      {/* <button onClick={() => {
        setCount(count + 1)
        setCount(prevCount => {
          return prevCount + 1
        })
      }}>Incrementar</button> */}
      <p>{isEven ? 'Es par' : 'Es impar'}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reiniciar</button>
    </>
  )
}

// -----------------------------------------------

export default function App() {

  const saludo = 'Hola Mundo'
  const mensaje = 'Este es un componente reutilizable desde nuevo archivo usando props'

  // Variables para el ejercicio
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <div>
        {/* Se utiliza las llaves para evaluar expresiones */}
        {saludo}

        {/* Se pueden crear componentes reutilizables */}
        <Mensaje color='red' />
        <Mensaje msg={mensaje} />
        <Descripcion />
        <Descripcion />

        { /* No se pueden evaluar objetos */}
        { /* {new Date()} */}
        {+ new Date()}

        {/* Ejercicio */}
        {/* 
        Componetizar lo siguiente
        <div>
          <h1>{course}</h1>
          <p>
            {part1} {exercises1}
          </p>
          <p>
            {part2} {exercises2}
          </p>
          <p>
            {part3} {exercises3}
          </p>
          <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div> 
        */}
        <Header course={course} />
        <Content part={part1} exercises={exercises1}></Content>
        <Content part={part2} exercises={exercises2}></Content>
        <Content part={part3} exercises={exercises3}></Content>
        <Total exercises={[exercises1, exercises2, exercises3]}></Total>

        {/* Ejercicio de manejo de estados */}
        <Contador />
      </div>
    </>
  )
}
