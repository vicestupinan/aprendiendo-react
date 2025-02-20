// Definicion de props para el componente Mensaje
interface MensajeProps {
  msg?: string,
  color?: string
}

// Creacion de nuevo componente para el mensaje desde nuevo archivo
export default function Mensaje({ msg, color }: MensajeProps) {
  return <h4 style={{ color }}>{msg ?? 'Mensaje por defecto'}</h4>
}