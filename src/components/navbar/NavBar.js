import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Tabs 
                    
                    variant="fullWidth">
                    <Tab label="Sales Tracker"></Tab>
                    

                </Tabs>
            </AppBar>
            
        </div>
    )
}

export default NavBar;
