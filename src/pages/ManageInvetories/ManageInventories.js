import React, { useEffect, useState } from 'react';
import './ManageInventories.css'
const ManageInventories = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items/`)
        .then(res => res.json())
        .then(data => setItems(data))
    }
        , []);
    return (
        <div className='my-5 inventories'>
            <table class="table table-striped table-hover container">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Publisher/Supplier</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{items.name}</td>
                        <td>{img}</td>
                        <td>{publisher}</td>
                        <td>price</td>
                        <td>{quantity}</td>
                        <td><button className='btn btn-danger'>Delete</button></td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventories;