import Note from "./Note"

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        important: true,
        categories: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true
    }
]

export default function SegundaClase() {
    return (
        <div>
            <h1>Clase #2</h1>
            <ul>
                {
                    notes.map(note => (<Note key={note.id} content={note.content} important={note.important} categories={note.categories} />))
                }
            </ul>
        </div>
    )
}