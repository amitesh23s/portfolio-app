import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage.tsx';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage /> } />
      </Routes>
    </BrowserRouter>
  );
};