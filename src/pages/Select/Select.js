import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useCustomHook from '../CustooHook/useCustomHook';
import useItem from '../CustooHook/useItem';

const Select = () => {
    const { itemId } = useParams();
    // for login user information 
    const [user] = useAuthState(auth);
    const [item] = useItem(itemId);

    const handleSelectItem = event => {
        event.preventDefault();

        const select = {
            email: user.email,
            item: item.name,
            itemId: itemId,
            buyer: event.target.buyer.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        // data send to server 

        const url = `https://morning-chamber-68565.herokuapp.com/select`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(select)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Item Selcted');
                event.target.reset()
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Invoice</h2>
            <form onSubmit={handleSelectItem}>

                <input className='w-100 mb-2' type="text" name="buyer" placeholder='Buyer Name' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" value={item.name} name="item" placeholder='Item' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder="Buyer's Address" autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder="Buyer's Phone" required />
                <br />
                <input className='btn mb-5 mt-3 text-light' style={{ backgroundColor: "#182D36" }} type="submit" value="My Item" />
            </form>
            <div className='my-3'>
                <h2>Seller:</h2>
                <h4>Name: {user?.displayName} <br />

                Email: {user?.email}</h4>
            </div>
        </div>
    );
};

export default Select;