import React from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container login'>
        <h2 className='my-4 text-info'>Login</h2>
        <Form className='login-form mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control  type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            
            <Button className='btnlog btn btn-info text-light' variant="primary" type="submit">
                Login
            </Button>
            <p>Haven't any account?<Link to='/register' className='text-info text-decoration-none'> Please Register.</Link></p>
            <p>Forget Your Password?<button  className='btn btn-link text-decoration-none text-info'>Reset Password</button></p>
        </Form>
        <ToastContainer />

    </div>
    );
};

export default Login;