import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userProfileImage, setUserProfileImage] = useState('');
    const [profileName, setProfileName] = useState('');
    const [profileEmail, setProfileEmail] = useState('');

  return (
    <UserContext.Provider value={{ userProfileImage, setUserProfileImage, profileName, setProfileName, profileEmail, setProfileEmail }}>
      {children}
    </UserContext.Provider>
  );
};

