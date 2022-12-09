import React from 'react'
import './App.css';
import Top from "./component/Top"
import Body from "./component/Body"
import Footer from './component/Footer';

function App() {
  return (
    <div className="the-card">
      <Top />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
