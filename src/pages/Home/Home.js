import React from 'react';
import banner from '../../images/banner/banner.jpg'
const Home = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner} className='w-100' style={{height:'600px'}} alt="" />
            </div>
            <div>
                <h2>Items</h2>
            </div>
        </div>
    );
};

export default Home;