import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'

const Social = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [signInWithGoogle,user, loading] = useSignInWithGoogle(auth);
    if (user) {
        navigate(from, { replace: true })
    }
    if(loading){
        return <p>Loading:{loading}</p>
    }
    return (
        <div>
            <div className='my-5'>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50 '></div>
                <p className='mt-3 mx-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {loading}
            <button onClick={() => signInWithGoogle()} className='btn text-dark border'><img src={google} style={{width:'25px'}} alt="" /> Continue With Google</button>
        </div>
        </div>
    );
};

export default Social;