import React from 'react';
import "./Loading.css"
const Loading = () => {
    return (
        <div className='loading'>
            <h2 className='m-5'>Loading</h2>
            <div style={{width:"3rem",height:"3rem"}} className="spinner-border text-danger m-5 fs-1" role="status">
                
            </div>
            
        </div>
    );
};

export default Loading;