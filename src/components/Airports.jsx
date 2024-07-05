import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AirportPage from './AirportPage';

function Airports() {
  const [airports, setAirports] = useState([
    { id: 1, name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
    { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
    { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
    { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
    { id: 5, name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 },
  ]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    setAirports(airports.filter((airport) => airport.id !== id));
  };

  const handleRowClick = (id) => {
    navigate(`/airport/${id}`);
  };

  return (
    <div className="airports-container">
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <h2>Airports</h2>
        <button className="add-new-button" style={{backgroundColor:'black', color:'white', borderRadius:'30px'}}>+ Add New</button>
      </div>

      <div className="controls">
        <input type="checkbox" id="all-airports" />
        <label htmlFor="all-airports">All Airports</label>
      </div>

      <table className="airports-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Country</th>
            <th>Code</th>
            <th>Terminals</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.id} onClick={() => handleRowClick(airport.id)}>
              <td><input type="checkbox" /></td>
              <td>{airport.name}</td>
              <td>{airport.country}</td>
              <td>{airport.code}</td>
              <td>{airport.terminals}</td>
              <td>
                <button onClick={(e) => { e.stopPropagation(); handleEdit(airport.id); }} className='button'>
                  <FaEdit />
                </button>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(airport.id); }} className='button'>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Airports;
