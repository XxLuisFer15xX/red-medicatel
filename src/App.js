import React, { useEffect, useReducer } from 'react';

// Hooks
import authReducer from './hooks/reducer/authReducer';
import AuthContext from './hooks/context/authContext';

// Components
import AppRouter from './components/routes/AppRouter';

// Const
import { authTypes } from './commons/types';

const App = () => {
  const [auth, dispatchAuth] = useReducer(authReducer, {});

  useEffect(() => {
    loadUserInfo();
  }, [])

  const loadUserInfo = () => {
    dispatchAuth({ type: authTypes.logout });
  }

  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      <AppRouter isAuth={auth?.isLogin} />
    </AuthContext.Provider>
  );
}

export default App;
