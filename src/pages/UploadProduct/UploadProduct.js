import React from 'react';
import './UploadProduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadProduct = () => {
    const handleSubmit= event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const writer = event.target.writer.value;
        const description = event.target.description.value;
        const publisher = event.target.publisher.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const img = event.target.img.value;


        const book = {name,writer,description,publisher,price,quantity,img};
        
        // send data to server 
        const url =`http://localhost:5000/items/`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success',data);
            toast('Product Added');
            event.target.reset()
    })
   };
    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Add New Books</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit}>
                <input className='mb-3' placeholder='Book Name' name='name'/>
                <input className='mb-3' placeholder='Photo Url' name='img' type="text" />
                <input className='mb-3' placeholder='Author' name='writer'/>
                <textarea className='mb-3' placeholder='Description' name='description' />
                
                <input className='mb-3' placeholder='Publisher/Supplier' name='publisher' />
                <input className='mb-3' placeholder='Price' name='price' type="price" />
                <input className='mb-3' placeholder='Quantity' name='quantity' />
                
                <input type="submit" className='submit'/>
            </form>
        </div>
    );
};

export default UploadProduct;