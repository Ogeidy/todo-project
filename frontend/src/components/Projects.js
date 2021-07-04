import React from "react";
import "./Table.css";

import { Link } from "react-router-dom";

const ProjectItem = ({ project, users, delete_project }) => {
    return (
        <Link className="table_body table_row row_link five_columns" to={`project/${project.id}`}>
            <div className="table_cell">{project.id}</div>
            <div className="table_cell">{project.name}</div>
            <div className="table_cell">{project.description}</div>
            <div className="table_cell">{project.repository}</div>
            <div className="table_cell">{project.contributors.length}</div>
            <button type='button' onClick={(event) => delete_project(event, project.id)} > Delete</button>
        </Link>
    );
};

const ProjectList = ({ projects, users, delete_project }) => {
    return (
        <div className="list">
            <div className="table">
                <div className="table_head table_row five_columns">
                    <div className="table_cell">Id</div>
                    <div className="table_cell">Name</div>
                    <div className="table_cell">Description</div>
                    <div className="table_cell">Repository</div>
                    <div className="table_cell">Contributors</div>
                    <div className="table_cell">Delete</div>
                </div>
                {projects.map((project) => (
                    <ProjectItem project={project} users={users} delete_project={delete_project} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
