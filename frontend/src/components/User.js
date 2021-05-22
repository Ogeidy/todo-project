import React from 'react'
import './User.css'


const UserItem = ({ user }) => {
    return (
        <tr>
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({ users }) => {
    return (
        <div className="user_list">
            <table className="user_table">
                <thead className="table_head">
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            First name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody className="table_body">{users.map((user) => <UserItem user={user} key={user.id} />)}</tbody>
            </table>
        </div>
    )
}


export default UserList