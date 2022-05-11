import React, { useEffect, useState } from 'react';
import banner from '../../images/banner/banner.jpg'
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items/`)
        .then(res => res.json())
        .then(data => setItems(data))
    }
        , []);
    return (
        <div>
            <div className="banner">
                <img src={banner} className='w-100' style={{ height: '600px' }} alt="" />
            </div>
            <div>
                <h2>Items</h2>
                <div className="cardContainer w-75 mx-auto">
                    {
                        items.map(item =>
                            <Products className="row" key={item._id} item={item} />

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;