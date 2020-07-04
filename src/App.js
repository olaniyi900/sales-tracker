import React from 'react';
import NavBar from './components/navbar/NavBar'
import DispayTable from './components/table/DisplayTable'
import Container from '@material-ui/core/Container';
import SaleForm from './components/forms/SaleForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h3 style={{ textAlign:'center'}}>Sales Tracker</h3>
      <Container >
        <SaleForm />
        <DispayTable />
      </Container>
      
    </div>
  );
}

export default App;
