const mensaje = 'Este es un componente reutilizable desde nuevo archivo'

// Creacion de nuevo componente para el mensaje desde nuevo archivo
export default function Mensaje() {
  return <h4>{mensaje}</h4>
}