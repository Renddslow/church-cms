import React, { useContext, useState } from 'react';

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
});

const parseOrNull = (input) => {
  try {
    return JSON.parse(input);
  } catch (e) {
    return null;
  }
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(parseOrNull(window.localStorage.getItem('fca:user')));

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const withUser = (Wrapped) => (props) => {
  const { user } = useContext(UserContext);

  return <Wrapped {...props} user={user} />;
};

export default UserProvider;
