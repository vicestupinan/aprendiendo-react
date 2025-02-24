import { NoteType } from "./types";

export default function Note({ title, body }: NoteType) {
    return (
        <li>
            {title}
            <p>{body}</p>
        </li>
    )
}