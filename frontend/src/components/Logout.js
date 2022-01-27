import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '909303957670-au8fme775hu6difq64rlvm2co4ccpcm3.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;