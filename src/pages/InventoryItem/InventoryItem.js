import React from 'react';

const InventoryItem = ({item}) => {
    const {title} = item;
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default InventoryItem;