import { Box } from '@mui/material';

import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Posts/Post/Post';
import PostDetail from './components/Posts/PostDetail';
import Posts from './components/Posts/Posts';
import { selectUser } from './features/users/userSlice';

const App = () => {
  const user = useSelector((state) => selectUser(state));

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Auth />}>
          {!user && (
            <>
              <Route index element={<Login />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
            </>
          )}
        </Route>

        <Route
          path='posts'
          element={user ? <Home /> : <Navigate to='/login' />}
        >
          <Route index element={<Posts />} />
          <Route path=':id' element={<PostDetail />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Box>
  );
};

export default App;
