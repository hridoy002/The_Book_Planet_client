import React from 'react';
import './InventoryItem.css'
const InventoryItem = ({ item }) => {
    const { name, img,description,writer,price,quantity } = item;
    return (
            <div className="card mb-3" style={{ maxWidth: "500px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                       
                        <img src={img} alt="" className="img-fluid rounded-start"  />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Author:{writer}</p>
                            <p className="card-text">Price{price}</p>
                            <p className="card-text"><small className="text-muted">Quantity:{quantity}</small></p>
                        </div>
                        <button className='btn btn-secondary'>Update</button>
                    </div>
                </div>
            </div>
    );
};

export default InventoryItem;