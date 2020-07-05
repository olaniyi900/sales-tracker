import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class SalesForm extends Component{

    state = {
        serial_no: 1,
        item: '',
        price: '',
        quantity:0,
        sales_person:'',
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ 
            [ name ]: value
        })
    }

   

    render(){
        let inputStyle = {
            marginTop:' 0.5rem'
        }

        return (

            <div>
                <p>Input Sales Data</p>
            <form >
                
                <div style={inputStyle}>
                <TextField 
                    type="number"  
                    label="Serial No"
                    name='serial_no' 
                    onChange={ this.handleChange } 
                    value={ this.state.serial_no }  
                    />
                </div>
                <div style={inputStyle}>
                <TextField 
                    type="text"  
                    label="Item Description" 
                    name='item' 
                    onChange={ this.handleChange } 
                    value={ this.state.item }
                />
                </div>
                <div style={inputStyle}>
                <TextField 
                    type="number"  
                    label="Price" 
                    name='price' 
                    onChange={ this.handleChange } 
                    value={ this.state.price }   
                    />
                </div>
                <div style={inputStyle}>
                <TextField 
                    type="number"  
                    label="Quantity" 
                    name='quantity' 
                    onChange={ this.handleChange } 
                    value={ this.state.quantity } 
                    />
                </div>
                <div style={inputStyle}>
                <TextField 
                    type="text"  
                    label="Sales Person"  
                    name='sales_person' 
                    onChange={ this.handleChange } 
                    value={ this.state.sales_person } 
                    />
                </div>
                
                < Button style={inputStyle} onClick={ () => this.props.handleSubmit(this.state) }>Submit</Button>
            </form>
            </div>
        );
    }
}

export default SalesForm;