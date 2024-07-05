import React, { useState } from 'react';
import AddTerminalPopup from './AddTerminalPopup';
import { IoChevronForwardOutline } from 'react-icons/io5';

function AirportPage() {
  const [terminals, setTerminals] = useState([
    { id: 1, name: 'Terminal 1', metadata: 'Optional metadata should be two lines.' },
    { id: 2, name: 'Terminal 2', metadata: 'Optional metadata should be two lines.' },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: 'Lost & Found', category: 'Option 1', subCategory: 'Option 1', description: 'Type here...', image: '' },
    { id: 2, name: 'Lounge', category: 'Option 2', subCategory: 'Option 2', description: 'Type here...', image: '' },
    { id: 3, name: 'Money Exchange', category: 'Option 3', subCategory: 'Option 3', description: 'Type here...', image: '' },
  ]);

  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleAddTerminal = (newTerminal) => {
    setTerminals([...terminals, newTerminal]);
    setShowPopup(false); // Close the popup after adding terminal
  };

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleImageUpload = (id, isTerminal, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {

        // eslint-disable-next-line no-unused-vars
        const updatedItem = { id, image: reader.result };
        if (isTerminal) {
          setTerminals(terminals.map(t => t.id === id ? { ...t, image: reader.result } : t));
        } else {
          setServices(services.map(s => s.id === id ? { ...s, image: reader.result } : s));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveButtonClick = () => {
    // Directly add a new terminal and then show the popup
    const newTerminal = { id: terminals.length + 1, name: 'New Terminal', image: '', metadata: '' };
    setTerminals([...terminals, newTerminal]);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="airport-page">
      <p>Airports <IoChevronForwardOutline/> Indira Gandhi International Airport</p>
      <h1>Indira Gandhi International Airport</h1>

      <h2>Terminals</h2>
      <ul className="terminals-list" style={{ display: 'flex' }}>
        {terminals.map((terminal) => (
          <li key={terminal.id} className="terminal-item" style={{ display: 'flex' }}>
            <img src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__" alt={terminal.name} className="terminal-image" />
            <div style={{ marginTop: '0px' }}>
              <h3>{terminal.name}</h3>
              <p>{terminal.metadata}</p>
              <input type="file" onChange={(e) => handleImageUpload(terminal.id, true, e)} className="terminal-image-input" />
            </div>
          </li>
        ))}
          <li className="add-terminal">
           <button onClick={() => handleAddTerminal({ id: terminals.length + 1, name: 'New Terminal', image: '', metadata: '' })}>
             + Add Terminal
           </button>
         </li>
      </ul>

      <h2>Services</h2>
      <button style={{ backgroundColor: 'black', color: 'white', justifyContent: 'flex-end' }} onClick={handleSaveButtonClick}>Save</button>
      {/* Pass showPopup, onSave, and onClose props to AddTerminalPopup */}
      <AddTerminalPopup showPopup={showPopup} onSave={handleAddTerminal} onClose={handlePopupClose} />
      <ul className="services-list">
        {services.map((service) => (
          <li key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <div style={{ display: 'flex', gap: '4px' }}>
              <input type="text" value={service.name} className="service-image" style={{ height: '25px', marginTop: '10px' }} />
              <div>
                <label htmlFor="category">Category:</label>
                <input value={service.category} id="category" />
              </div>
              <div>
                <label htmlFor="subcategory">Sub Category:</label>
                <input value={service.subCategory} id="subcategory" />
              </div>
              <input value={service.description} />
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-image"
                />
              )}
              <input type="file" onChange={(e) => handleImageUpload(service.id, false, e)} className="service-image-input" />
            </div>
          </li>
        ))}
         <li className="add-service">
          <button onClick={() => handleAddService({ id: services.length + 1, name: 'New Service', category: '', subCategory: '', description: '', image: '' })}>
            + Add Service
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AirportPage;
