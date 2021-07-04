import React from "react";
import "./Table.css";

const NoteItem = ({ note }) => {
    return (
        <div className="table_body table_row five_columns row_link">
            <div className="table_cell">{note.id}</div>
            <div className="table_cell">{note.name}</div>
            <div className="table_cell">{note.author.username}</div>
            <div className="table_cell">{note.project}</div>
            <div className="table_cell">{note.active ? "Active" : "Inactive"}</div>
            <div className="table_cell">{note.creationDate}</div>
        </div>
    );
};

const NoteList = ({ notes }) => {
    return (
        <div className="list">
            <div className="table">
                <div className="table_head table_row five_columns">
                    <div className="table_cell">Id</div>
                    <div className="table_cell">Name</div>
                    <div className="table_cell">Author</div>
                    <div className="table_cell">Project</div>
                    <div className="table_cell">State</div>
                    <div className="table_cell">Creation date</div>
                </div>
                {notes.map((note) => (
                    <NoteItem note={note} key={note.id} />
                ))}
            </div>
        </div>
    );
};

export default NoteList;
