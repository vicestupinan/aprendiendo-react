interface NoteType {
    content: string,
    important: boolean,
    categories?: string[]
}

export default function Note({ content, important, categories }: NoteType) {
    return (
        <li>
            <p>{content}</p>
            <strong>
                {important ? 'Important' : 'Not important'}
            </strong>
            {
                categories?.map(category => <p key={category}>{category}</p>)
            }
        </li>
    )
}