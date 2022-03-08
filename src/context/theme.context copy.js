import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [loggedInUser, setLoggedInUser]

  return (
    <AuthContext.Provider value={  { loggedInUser }  }>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProviderWrapper };