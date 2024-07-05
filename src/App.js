import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airports from './components/Airports';
import AirportPage from './components/AirportPage';
import Sidebar from './components/Sidebar';
import AddTerminalPopup from './components/AddTerminalPopup'; 

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Routes>
          <Route index element={<Airports />} />
          <Route path="airport/:id" element={<AirportPage />} />
        </Routes>
        <AddTerminalPopup /> {/* Render AddTerminalPopup outside of Routes */}
      </div>
    </Router>
  );
}

export default App;
