import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import Loading from '../../Loading/Loading';
import { ToastContainer,toast } from 'react-toastify';
import Social from '../../share/Social/Social';


const Register = () => {
    const navigate = useNavigate();
    // create user 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    const [updateProfile] = useUpdateProfile(auth);
    // privacy agree state
    const [agree, setAgree] = useState(false);
    // hanlde register form 
    const handleRegisterSubmit =async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);

        
        if(email) {
            toast('Please Check Your Email and Verify your account');
        } 

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    // error message 
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger' style={{ textAlign: 'left' }}>Error: {error?.message}</p>
    }
    if(loading){
        return <Loading/>
    }
    // redirect to home
    if (user) {
        navigate('/')
    }
    return (
        <div className='container my-5 '>
            <Form onSubmit={handleRegisterSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='name' placeholder="Your Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <li className='text-start mb-3'>Please Enter minimum 6 digit,alphabet or character</li>


                <div style={{ textAlign: 'left', }}>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="checkbox" id="" /> <label className={agree ? 'text-secondary' : 'text-danger'} htmlFor="checkbox">Accept Terms and Conditions</label>
                </div>
                {errorMessage}
                {loading}
                
                <Button disabled={!agree}  className='btnStyle w-50 my-3 btn  text-light'  type="submit">
                    Register
                </Button>
                <p>Already have an account?<Link className='text-info text-decoration-none' to='/login'> Please Login</Link></p>
            </Form>
            <Social/>
            <ToastContainer/>
        </div>
    );
};

export default Register;