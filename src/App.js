import { Box } from '@mui/material';

import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import InputWithIcon from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { selectUser } from './features/users/userSlice';

const App = () => {
  const user = useSelector((state) => selectUser(state));

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route
          path='/login'
          element={!user ? <InputWithIcon /> : <Navigate to='/' replace />}
        />

        <Route
          path='/'
          element={user ? <Home /> : <Navigate to='/login' replace />}
        ></Route>
      </Routes>
    </Box>
  );
};

export default App;
