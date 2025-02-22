import { useState } from "react"
import Note from "./Note"

interface NoteType {
    id: number,
    content: string,
    important: boolean,
    categories?: string[]
}

interface SegundaClaseProps {
    notesProps: NoteType[]
}

export default function SegundaClase({ notesProps }: SegundaClaseProps) {
    const [notes, setNotes] = useState(notesProps)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const noteToAdd: NoteType = {
            id: notes.length + 1,
            content: newNote,
            important: Math.random() > 0.5 ? true : false,
            categories: []
        }
        setNotes([...notes, noteToAdd])
        setNewNote('')
    }

    const handleShowAll = () => {
        setShowAll(() => !showAll)
    }

    return (
        <div>
            <h1>Clase #2</h1>
            <h2>Notes</h2>
            <button onClick={handleShowAll}>{showAll ? 'Show only important' : 'Show all'}</button>
            <ul>
                {
                    notes
                        .filter(note => showAll || note.important)
                        .map(note => <Note key={note.id} {...note} />)
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote} />
                <button>Add</button>
            </form>
        </div>
    )
}