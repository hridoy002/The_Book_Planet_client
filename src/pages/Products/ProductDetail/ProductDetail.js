import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
const ProductDetail = () => {
    const { itemId } = useParams();
    const [quantity, setQuantity] = useState(0);
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const handleDeliver = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
            console.log(setQuantity)
        }
    }

    const handleQuantity = event =>{
        setQuantity(event.target.value);
    }
    return (
        <div >
            <h2>Item Details</h2>
            <div className="card mb-3" style={{ width: "500p"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.img} className='img-fluid w-50 rounded-start p-3' alt="" />
                    </div>
                    <div className="col-md-8 text-start">
                        <div className="card-body">
                            <h3 className="card-title">Book Name: {item.name}</h3>
                            <p>Author: {item.writer}</p>
                            <small>ID: {item._id}</small>
                            <p>Publisher: {item.supplier}</p>
                            <p onChange={handleQuantity}  >Quantity: {item.quantity}{quantity}</p>
                            <input type="text" placeholder='Quantity' />
                            <button className='btn btn-secondary ms-2'>Save</button>
                            <br />
                            
                            
                        </div>
                        <button onClick={handleDeliver} className="btn btn-secondary mt-2 ms-3 mb-2 w-50">Delivered</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;