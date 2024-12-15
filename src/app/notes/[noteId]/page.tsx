export default function noteId ({params} : {
    params : {
        noteId : string
    }
}) {
    return <h3>Note id nya itu {params.noteId}</h3>
}