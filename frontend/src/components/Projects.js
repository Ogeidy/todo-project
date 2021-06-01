import React from "react";
import "./Table.css";

import { Link } from "react-router-dom";

const ProjectItem = ({ project, users }) => {
    return (
        <Link className="table_body table_row row_link" to={`project/${project.id}`}>
            <div className="table_cell">{project.id}</div>
            <div className="table_cell">{project.name}</div>
            <div className="table_cell">{project.description}</div>
            <div className="table_cell">{project.repository}</div>
            <div className="table_cell">{project.contributors.length}</div>
        </Link>
    );
};

const ProjectList = ({ projects, users }) => {
    return (
        <div className="list">
            <div className="table">
                <div className="table_head table_row">
                    <div className="table_cell">Id</div>
                    <div className="table_cell">Name</div>
                    <div className="table_cell">Description</div>
                    <div className="table_cell">Repository</div>
                    <div className="table_cell">Contributors</div>
                </div>
                {projects.map((project) => (
                    <ProjectItem project={project} users={users} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
