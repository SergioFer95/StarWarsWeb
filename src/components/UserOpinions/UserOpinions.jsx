import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/esm/Carousel';

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

            <h3 className='comentsTitle'>COMENTS OF OUR FAVOURITES JEDIS</h3>

            <Carousel variant="dark">
            
                {users.map((user, index) => {
                    return (
                        <Carousel.Item className='carouselContainer' key={index}>

                            <section className='cardUser'>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                                <p className='cardUser__body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat sapien non nisl placerat, eu vulputate purus tempus. Mauris ac condimentum arcu. Etiam volutpat sapien non nisl placerat, eu vulputate purus tempus.</p>
                            </section>
                        </Carousel.Item>
                    )
                })}

            </Carousel>
        </div>
    )
}
