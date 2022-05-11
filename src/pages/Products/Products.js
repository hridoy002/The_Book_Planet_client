import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'
const Products = ({ item }) => {
    const { _id,name, img,description,writer,price,quantity } = item;

    const navigate = useNavigate()
    const navigateItem = id => {
        navigate(`/productDetail/${id}`)}
    
    return (
            <div className="card mb-3 " style={{ maxWidth: "500px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                       
                        <img src={img} alt="" className="img-fluid rounded-start p-3"  />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description.slice(0,300).concat('...')}</p>
                            <p className="card-text">Author:{writer}</p>
                            <p className="card-text">Price{price}</p>
                            <p className="card-text"><small className="text-muted" >Quantity:{quantity}</small></p>
                        </div>
                        <button className='btn btn-secondary' onClick={() => navigateItem(_id)}>Update</button>
                    </div>
                </div>
            </div>
    );
};

export default Products;