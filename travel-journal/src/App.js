import React from  'react'
import Card from './component/Card'
import Navbar from './component/Navbar'
import cardData from './cardData'
import './App.css';

function App() {
  const dataElements = cardData.map(datEl => {
    return <Card 
            image={datEl.image}
            icon={datEl.icon}
            title={datEl.title}
            location={datEl.location}
            googleMapsUrl={datEl.googleMapsUrl}
            startDate={datEl.startDate}
            endDate={datEl.endDate}
            description={datEl.description}
/>
  })
  return (
    <div className="App">
      <Navbar />
      {dataElements}
    </div>
  );
}

export default App;
