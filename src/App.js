import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar'
import DispayTable from './components/table/DisplayTable'
import Container from '@material-ui/core/Container';
import SaleForm from './components/forms/SaleForm';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
 state = {
   data: []
 }
 

  handleSubmit = (d) => {
        let data = [ ...this.state.data ]
       data.push(d)
       
        this.setState({
          data,
        })
        
}
 render() {

  return (
    <div className="App">
        <NavBar />
        <Container style={{marginLeft:'8rem', marginTop:'3rem'}}>
       
          <Grid container spacing={8}>
            <Grid item s={12} m={3}>
              <SaleForm handleSubmit={ this.handleSubmit }/>
            </Grid>
            <Grid item s={12} m={9}>
              <DispayTable data={ this.state.data }/>
            </Grid>
          </Grid>
          </Container>
      
    </div>
  );
}
}

export default App;
