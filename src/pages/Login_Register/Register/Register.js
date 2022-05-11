import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
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
    // privacy agree state
    const [agree, setAgree] = useState(false);
    // hanlde register form 
    const handleRegisterSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    // error message 
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger' style={{ textAlign: 'left' }}>Error: {error?.message}</p>
    }
    if(loading){
        return <p>Loading...</p>
    }
    // redirect to home
    if (user) {
        navigate('/')
    }
    return (
        <div className='container my-5 '>
            <Form onSubmit={handleRegisterSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>


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
            <Social />
        </div>
    );
};

export default Register;