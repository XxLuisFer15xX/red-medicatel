import React, { useState } from 'react';
import AppRouter from './components/routes/AppRouter';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppRouter isAuth={isAuth} />
  );
}

export default App;
