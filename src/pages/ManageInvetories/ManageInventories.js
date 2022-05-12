import React from 'react';
import useCustomHook from '../CustooHook/useCustomHook';
import './ManageInventories.css'
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [items] = useCustomHook();
    const handleDelete = id => {
        const accept = window.confirm('Are you sure want to delete?');
        if (accept) {
            console.log('Delete a Product',id) 
            fetch(`http://localhost:5000/items/${id}`, {

                method: 'DELETE' 
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (

        <div>
            <div>
                <table className="table  container">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Writer</th>
                            <th>Publisher/Supplier</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => {
                                return (
                                    <tr key={item._id}>

                                        <td>{item.name}</td>
                                        <td><img src={item.img} style={{ width: "40px" }} alt="" /></td>

                                        <td>{item.writer}</td>
                                        <td>{item.supplier}</td>
                                        <td>{item.price}</td>

                                        <td>{item.quantity}</td>
                                        <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <button className='btn addbtn w-50 mb-5' > <Link to={'/uploadProduct'}>Add New Product</Link></button>
        </div>
    );
};

export default ManageInventories;