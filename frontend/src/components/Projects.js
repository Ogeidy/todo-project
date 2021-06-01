import React from "react";
import "./Table.css";

import { Link } from "react-router-dom";

const ProjectItem = ({ project, users }) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.repository}</td>
            <td>
                {project.contributors.length}
            </td>
        </tr>
    );
};

const ProjectList = ({ projects, users }) => {
    return (
        <div className="list">
            <table className="table">
                <thead className="table_head">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Repository</th>
                        <th>Contributors</th>
                    </tr>
                </thead>
                <tbody className="table_body">
                    {projects.map((project) => (
                        <ProjectItem
                            project={project}
                            users={users}
                            key={project.id}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;
