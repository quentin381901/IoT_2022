import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";
const clientId =
  '909303957670-au8fme775hu6difq64rlvm2co4ccpcm3.apps.googleusercontent.com';

function LogoutHooks() {
  const navigate = useNavigate();
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    navigate('/')
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;