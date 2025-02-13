import './App.css'

const mensaje = 'Hola Mundo'

// -----------------------------------------------

// Creacion de nuevos componentes reutilizables

// Creacion de nuevo componente para el mensaje
const Mensaje = () => {
  return <h4>{mensaje}</h4>
}

// Creacion de nuevo componente para la descripcion
const Descripcion = () => {
  return <p>Este es un componente reutilizable</p>
}

// -----------------------------------------------

export default function App() {
  
  return (
    <>
      <div>
        {/* Se utiliza las llaves para evaluar expresiones */}
        {mensaje}

        {/* Se pueden crear componentes reutilizables */}
        <Mensaje />
        <Mensaje />
        <Descripcion />
        <Descripcion />

        { /* No se pueden evaluar objetos */}
        { /* {new Date()} */}
        {+ new Date()}
      </div>
    </>
  )
}
