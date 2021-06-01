import React from "react";
import "./Table.css";

const UserItem = ({ user }) => {
    return (
        <div className="table_body table_row row_link">
            <div className="table_cell">{user.id}</div>
            <div className="table_cell">{user.username}</div>
            <div className="table_cell">{user.firstName}</div>
            <div className="table_cell">{user.lastName}</div>
            <div className="table_cell">{user.email}</div>
        </div>
    );
};

const UserList = ({ users }) => {
    return (
        <div className="list">
            <div className="table">
                <div className="table_head table_row">
                    <div className="table_cell">Id</div>
                    <div className="table_cell">Username</div>
                    <div className="table_cell">First name</div>
                    <div className="table_cell">Last Name</div>
                    <div className="table_cell">Email</div>
                </div>
                {users.map((user) => (
                    <UserItem user={user} key={user.id} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
