import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const { itemId } = useParams();
    const [quantity, setQuantity] = useState(10);
    const [update,setUptade] = useState(0);
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`https://morning-chamber-68565.herokuapp.com/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
   
    const handleDeliver = () => {
        console.log()
        if(quantity>0){
            setQuantity(quantity - 1);
        }
        
        // const url = `https://morning-chamber-68565.herokuapp.com/items/${itemId}`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newQuantity)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if(data.newQuantity === 1){
        //             setQuantity(quantity + 1);
        //         }
        //     })
    }

    const handleUpdate = e =>{
        e.preventDefault();
        const inputQuantity = e.target.newQuantity.value;
        console.log(inputQuantity);
        setUptade( inputQuantity);
        e.target.reset()
    }

    // update quantity 
    // const handleUpdate = event => {
    //     event.preventDefault();
    //     const newQuantity = event.target.newQuantity;

    //     // data send  to the server
    //     const url = `https://morning-chamber-68565.herokuapp.com/items/${itemId}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             toast('users added successfully!!!');
    //             event.target.reset();
    //         })
    // }
    return (
        <div >
            <h2>Item Details</h2>
            <div className="card mb-3" style={{ width: "500p" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.img} className='img-fluid w-50 rounded-start p-3' alt="" />
                    </div>
                    <div className="col-md-8 text-start">
                        <div className="card-body">
                            <h3 className="card-title">Book Name: {item.name}</h3>
                            <p>Author: {item.writer}</p>
                            <small>ID: {item._id}</small>
                            <p>Publisher: {item.publisher}</p>
                            <p>Price: {item.price}</p>
                            <p >Quantity: {update}</p>

                            <button onClick={handleDeliver} className="btn btn-secondary mt-2  mb-2 w-50">Delivered</button>

                            <br />

                            <form onSubmit={handleUpdate} action="">
                                <input type="text" placeholder='Quantity' name='newQuantity' />
                                <button className='btn btn-secondary ms-2'>Save</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetail;