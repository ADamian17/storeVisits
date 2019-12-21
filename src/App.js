import React from 'react';

import StoreVcontainer from './containers/StoreVcontainer'
import './App.css';

function App() {
  return (
    <div className="container-fluid">
     <div className="row">
       <div className="col">
        <div className="my-header p-2">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col"></div>
            <div className="col text-center">
              <h3>Store Visits</h3>
            </div>
            <div className="col"></div>
          </div>
        </div>
       </div>
     </div> 
      <StoreVcontainer />
    </div>
  );
}

export default App;
