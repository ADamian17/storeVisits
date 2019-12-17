import React from 'react';

import StoreVcontainer from './containers/StoreVcontainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="my-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4"></div>
          <div className="col-4 text-center">
            <h1>Store Visits</h1>
          </div>
          <div className="col-4"></div>
        </div>
      </header>
      <main>
        <StoreVcontainer />
      </main>
    </div>
  );
}

export default App;
