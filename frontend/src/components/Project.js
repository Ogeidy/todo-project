import React from "react";
import "./Project.css";
import UserList from "./Users.js";
import NoteList from "./Notes.js";

import { useParams } from "react-router-dom";

const Project = ({ projects, users, notes }) => {
    let { id } = useParams();
    let project = projects.find((elem) => elem.id == id);
    let contributors = users.filter((elem) => project.contributors.includes(elem.id));
    console.log(contributors);
    let projectNotes = notes.filter((elem) => elem.project == project.id);
    console.log(projectNotes);
    return (
        <div className="info_container">
            <h1 className="info_title">
                <span>#</span>
                <span>{project.id}</span> <span>{project.name}</span>
            </h1>
            <div className="info_link">
                <a href={project.repository}>Repository link</a>
            </div>
            <h2 className="info_header">Description</h2>
            <div className="info_text">{project.description}</div>
            <h2 className="info_header">Contributors</h2>
            <UserList users={contributors} />
            <h2 className="info_header">Notes</h2>
            <NoteList notes={projectNotes} />
        </div>
    );
};

export default Project;
