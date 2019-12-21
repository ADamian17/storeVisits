import React from 'react';

import StoreVcontainer from './containers/StoreVcontainer'
import './App.css';

function App() {
  return (
    <div className="">
     <div className="row">
       <div className="col">
        <div className="my-header p-2">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col"></div>
            <div className="col text-center">
              <h1>Store Visits</h1>
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
