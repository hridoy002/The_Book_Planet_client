import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';


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

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-dark'> PLEASE VERIFY YOUR EMAIL ADDRESS</h3>
            <button
            className='btn btn-success'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Send Verification Email Again
            </button>    
        </div>
    }

    return children;
};


export default RequireAuth;