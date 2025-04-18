import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Dashboard } from '../pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/details/productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />*/}
        </Route>
      </Routes>
    </>
  );
}

export default App;
