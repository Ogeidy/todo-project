import React from 'react'


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
        <table>
            <thead>
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
            <tbody>{users.map((user) => <UserItem user={user} key={user.id} />)}</tbody>
        </table>
    )
}


export default UserList