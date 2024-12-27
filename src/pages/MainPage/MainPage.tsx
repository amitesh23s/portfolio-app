import React, { ReactNode } from 'react';
import './MainPage.css'
import Personal from '../../components/Personal/Personal.tsx';
import Main from '../../components/Main/Main.tsx';

export const MainPage = () => {

  return (
    <div className="home">
      <div className="container">
        <Personal />
        <Main />
        </div>
    </div>
  );
};