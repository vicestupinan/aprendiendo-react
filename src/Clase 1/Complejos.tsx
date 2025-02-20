import { useState } from 'react'

const WarningNotUsed = () => {
    return <h3>Todavia no se ha usando el contador</h3>
}

const ListOfClicks = ({ clicks }: { clicks: string[] }) => {
    return (
        <>
            <h3>Clicks totales: {clicks.length}</h3>
            <p>{clicks.join(', ')}</p>
        </>
    )
}

// Definicion de estado inicial
const INITIAL_STATE = {
    left: 0,
    right: 0,
    message: "Mensaje de estado"
}

// Creacion de nuevo componente para el manejo de estados complejos
export default function Complejos() {
    const [counters, setCounters] = useState(INITIAL_STATE)

    const [clicks, setClicks] = useState<string[]>([])

    const handleClickLeft = () => {
        // Uso de operador spread para copiar el objeto y modificar solo las propiedades que se quieren cambiar
        const newCountersState = {
            ...counters,
            left: counters.left + 1,
        }
        setCounters(newCountersState)
        setClicks((prevClicks) => [...prevClicks, 'L'])
    }

    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        })
        setClicks((prevClicks) => [...prevClicks, 'R'])
    }

    const handleReset = () => {
        setCounters(INITIAL_STATE)
        setClicks([])
    }

    // Otra forma de realizar el conteo de click usando filter, extrayendo la mayoria de informacion de un solo estado
    // const left = clicks.filter((click) => click === 'L')
    // const right = clicks.filter((click) => click === 'R')

    return (
        <>
            <p>Uso de estados complejos</p>
            {counters.left}
            <button onClick={handleClickLeft}>Izq</button>
            <button onClick={handleClickRight}>Der</button>
            {counters.right}
            <p>
                <button onClick={handleReset}>Reset</button>
            </p>
            {
                clicks.length === 0
                    ? <WarningNotUsed />
                    : <ListOfClicks clicks={clicks} />
            }
            <p>{counters.message}</p>
        </>
    )
}