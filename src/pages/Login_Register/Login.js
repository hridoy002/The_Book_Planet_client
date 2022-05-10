import { useState } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import Social from './Social/Social';

const Login = () => {
    const navigate = useNavigate();
    // private route auth hook 
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // log in by email password auth hook 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
         error,
    ] = useSignInWithEmailAndPassword(auth);
    

    //   form submit 
    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    
    // password reset auth hook 
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState();

    if (user) {
        navigate(from, { replace: true })
    }
    

    let errorMessage;
    if(error){
        errorMessage = <p className='text-danger'>Error:{error?.message}</p>;
    }

    if(loading){
            return <p>Loading...</p>;      
    }
    return (
        <div className='container login'>
        <h2 className='my-4' style={{color:"#182D36"}}>Login</h2>
        <Form onSubmit={handleLoginSubmit} className='login-form mx-auto w-50'>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control  type="email" name='email' onBlur={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            
            {errorMessage}
            {loading}
            <Button className='btn btnStyle text-light w-50' variant="primary" type="submit">
                Login
            </Button>
            <p>Haven't any account?<Link to='/register' className='text-info text-decoration-none'> Please Register.</Link></p>
            <p>Forget Your Password?<button onClick={async () => {
                    await sendPasswordResetEmail(email);
                    if (email) {
                        alert('Sent email');
                    }
                }}  className='btn btn-link text-decoration-none text-success'>Reset Password</button></p>
        </Form>
        <ToastContainer />
        <Social/>

    </div>
    );
};

export default Login;