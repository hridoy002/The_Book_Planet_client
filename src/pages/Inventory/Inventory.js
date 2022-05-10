import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {itemId} = useParams();
    const [item,setItem] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/items/${itemId}`)
        .then(res => res.json())
        .then(data => setItem(data));
    },[])
    return (
        <div className='w-50 mx-auto text-start'>
            <h2>Item Details</h2>
            <img src={item.img} className='w-25' alt="" />
            <h3>Book Name: {item.name}</h3>
            <small>ID: {item._id}</small>
            <p>Author: {item.writer}</p>
            <p>Publisher: {item.supplier}</p>
            <p>Quantity: {item.quantity}</p>

        </div>
    );
};

export default Inventory;