import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(loading){
        return <h2>Loading...</h2>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    if (user?.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        console.log(user)
        return <div className='text-center mt-5' style={{minHeight:'500px'}}>
            <p className='fs-3'> If You miss previous Verification message.Please send again verification message.</p>
            <button
            className='btn btn-success my-auto'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Email Verify');
                }}
            >
                Resend Verification Message
            </button>    
            <ToastContainer/>
        </div>
        
    }

    return children;
};


export default RequireAuth;