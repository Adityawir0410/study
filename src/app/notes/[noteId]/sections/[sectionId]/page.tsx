export default function sectionId ({params} : {
    params : {
        sectionId : string,
        noteId : string,
    }
}) {
    return <h1>Ini adalah page ke {params.noteId} dan nomor ke  {params.sectionId}</h1>
}