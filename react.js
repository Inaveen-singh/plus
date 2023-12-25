import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PatientTable from './components/PatientTable';
import EncounterPage from './components/EncounterPage';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={PatientTable} />
        <Route path="/encounter" component={EncounterPage} />
      </div>
    </Router>
  );
}

export default App;
