import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '909303957670-au8fme775hu6difq64rlvm2co4ccpcm3.apps.googleusercontent.com';

function LoginHooks() {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log('Login ', res);
    console.log('Login Success: currentUser:', res.profileObj);
   // refreshTokenSetup(res.code);
    navigate('/mirror')

    return
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    responseType: 'code',
    prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;