import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import TopProducts from './components/TopProducts/TopProducts';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Header />
        <Main />
        <TopProducts />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
