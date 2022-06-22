import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import About from '../../pages/About/About';
import NoPage from '../../pages/NoPage/NoPage';
import Services from '../../pages/Services/Services';
import Pricing from '../../pages/Pricing/Pricing';
import Blog from '../../pages/Blog/Blog';

function AppRouter() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='pricing' element={<Pricing/>}/>
            <Route path='blog' element={<Blog />}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default AppRouter;