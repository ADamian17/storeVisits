import React from 'react';

import StoreVisitscontainer from './containers/StoreVisitContainer'
import './App.css';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-header">
      <h3 className="navTitle">Store Visits</h3>
    </nav>

    <main role="main" className="container">
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <StoreVisitscontainer />
      </div>
    </main>
  </>  
  );
}

export default App;
