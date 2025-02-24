import { useEffect, useState } from 'react'
import Note from '../Clase 3/Note'
import { NoteType } from './types'
import { getAllNotes } from './services/notes/getAllNotes'
import { createNote } from './services/notes/createNote'

export default function TerceraClase() {
    const [notes, setNotes] = useState<NoteType[]>([])
    const [newNote, setNewNote] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        getAllNotes()
            .then(notes => setNotes(notes))
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setError('')

        const noteToAdd: NoteType = {
            title: newNote,
            body: "Esto es un cuerpo de la nota",
        }

        createNote(noteToAdd)
            .then(note => setNotes([...notes, note]))
            .catch(e => setError(e.message))

        setNewNote('')
    }

    return (
        <div>
            <h1>Clase #3</h1>
            <h2>Notes</h2>
            <ul>
                {
                    notes
                        .map(note => <Note key={note.id} {...note} />)
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote} />
                <button>Add</button>
            </form>
            {
                error ? <span style={{ color: 'red' }}>{error}</span> : ""
            }
        </div>
    )
}