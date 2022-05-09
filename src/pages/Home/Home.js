import React, { useEffect, useState } from 'react';
import banner from '../../images/banner/banner.jpg'
import InventoryItem from '../InventoryItem/InventoryItem';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>
        {fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))}
        , []);
    return (
        <div>
            <div className="banner">
                <img src={banner} className='w-100' style={{ height: '600px' }} alt="" />
            </div>
            <div>
                <h2>Items</h2>
                {
                    items.map(item => <li>{item.name}</li>)
                }
            </div>
        </div>
    );
};

export default Home;