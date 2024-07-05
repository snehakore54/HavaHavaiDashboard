import React from 'react';

function AddTerminalPopup({ showPopup, onSave, onClose }) {
  const handleSaveTerminal = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const terminalData = {
      title: formData.get('title'),
      description: formData.get('description'),
      image: formData.get('image'),
    };
    onSave(terminalData); // Call onSave prop to handle saving terminal data
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Terminal</h2>
            <form onSubmit={handleSaveTerminal}>
              <label htmlFor="title">Terminal title:</label>
              <input type="text" id="title" name="title" required />
              <br />
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" required />
              <br />
              <label htmlFor="image">Upload image:</label>
              <input type="file" id="image" name="image" accept="image/*" required />
              <br />
              <button type="submit">Save</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTerminalPopup;
