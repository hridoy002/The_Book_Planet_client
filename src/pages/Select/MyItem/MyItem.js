import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import deleted from '../../../images/icons8-delete-100.png'

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyitems] = useState([]);
    useEffect(() => {
        const email = user.email;
        fetch(`https://morning-chamber-68565.herokuapp.com/select?email=${email}`)
            .then(res => res.json())
            .then(data => setMyitems(data)
            )
    }, [user])

        const handleDelete = id => {
            const accept = window.confirm('Are you sure want to delete?');
            if (accept) {
                console.log('Delete a Product',id) 
                fetch(`https://morning-chamber-68565.herokuapp.com/select/${id}`, {
    
                    method: 'DELETE' 
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const otherItem = myitems.filter(item => item._id !== id);
                        setMyitems(otherItem)
                    })
            }
        }
        return (
            <div style={{ minHeight: '500px' }}>
                My Items {myitems.length}
                <table className="table  container">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Buyer Name</th>
                            <th>Address</th>
                            <th>Phone</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myitems.map(item => {
                                return (
                                    <tr key={item._id}>

                                        <td>{item.item}</td>
                                        <td><img src={item.buyer} style={{ width: "40px" }} alt="" /></td>

                                        <td>{item.address}</td>
                                        <td>{item.phone}</td>

                                        <td><button className='btn ' onClick={() => handleDelete(item._id)}> <img style={{ width: '40px' }} src={deleted} alt="" /> </button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    };

    export default MyItem;