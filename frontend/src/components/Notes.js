import React from 'react'
import './Table.css'

import { Link } from 'react-router-dom'


const NoteItem = ({ note }) => {
    return (
        <tr>
            <td>
                {note.id}
            </td>
            <td>
                {note.name}
            </td>
            <td>
                {note.author}
            </td>
            <td>
                {note.project}
            </td>
            <td>
                {note.active ? ("Active") : ("Inactive")}
            </td>
            <td>
                {note.creationDate}
            </td>
        </tr>
    )
}

const NoteList = ({ notes }) => {
    return (
        <div className="list">
            <table className="table">
                <thead className="table_head">
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Author
                        </th>
                        <th>
                            Project
                        </th>
                        <th>
                            State
                        </th>
                        <th>
                            Creation date
                        </th>
                    </tr>
                </thead>
                <tbody className="table_body">{notes.map((note) => <NoteItem note={note} key={note.id} />)}</tbody>
            </table>
        </div>
    )
}


export default NoteList