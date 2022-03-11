import React, { useState, useEffect } from 'react'

export default function UserOpinions() {
    const [users, setUsers] = useState([])

    const baseInfoUsersUrl = 'https://jsonplaceholder.typicode.com'

    useEffect(() => {
        fetch(`${baseInfoUsersUrl}/users`)
            .then(data => data.json())
            .then(data => setUsers(data))
    })

    return (
        <div className='usersOpinionsContent'>

            {users.map((user, index) => {
                return (
                    <section className='cardUser'>

                        <div className='cardUser__userInfo' key={index}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <h4>Coment:</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat sapien non nisl placerat, eu vulputate purus tempus. Mauris ac condimentum arcu. Integer porta, lectus eget gravida tincidunt, massa purus consectetur turpis, sed blandit dui justo vitae dui. Mauris ante erat, commodo vitae condimentum vel, suscipit et ligula.</p>
                        </div>
                    </section>

                )
            })}
        </div>
    )
}
