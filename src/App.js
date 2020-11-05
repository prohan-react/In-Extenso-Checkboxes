import React, { useState } from 'react';
import './App.css';

function App() {  
  const [checkboxes, setCheckboxes] = useState(
    [
      {id: 0, name: "Item 1", isChecked: false},
      {id: 1, name: "Item 2", isChecked: false},
      {id: 2, name: "Item 3", isChecked: false},
      {id: 3, name: "Item 4", isChecked: false},
    ]
  )
  const [masterCheckbox, setMasterCheckbox] = useState({isChecked: false})

  return (
    <div className="App">
      <header className="App-header">
        <h1>Checkboxes</h1>
        <div className="checkbox-div">
          <input type="checkbox" checked={masterCheckbox.isChecked} value={masterCheckbox.isChecked}
            onChange={() => {
              setMasterCheckbox({isChecked: !masterCheckbox.isChecked})
              setCheckboxes(checkboxes.map(box => box = {...box, isChecked: !masterCheckbox.isChecked}))
          }}
          />
          <p>Select all</p>
        </div>
        {checkboxes.map((box) => {
          return (
            <div className="checkbox-div">
              <input type="checkbox" checked={box.isChecked} value={box.isChecked} onChange={() => {
                setCheckboxes(checkboxes.map(item => {
                  if(item.id === box.id) {
                    item.isChecked = !item.isChecked
                  }
                  return item
                }))
              }}
              />
              <p>{box.name}</p>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
