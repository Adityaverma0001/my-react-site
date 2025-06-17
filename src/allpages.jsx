import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home';         
import Pages from './pages';
import Tourlist from './tourlist';
import Toursearch from './toursearch';
import Blog from './blog';

function All() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/tourlist' element={<Tourlist />} />
        <Route path='/toursearch' element={<Toursearch />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}


export default All;
