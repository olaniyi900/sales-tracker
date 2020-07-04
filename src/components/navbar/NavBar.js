import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Tabs 
                    // indicatorColor="primary"
                    // textColor="primary"
                    variant="fullWidth">
                    <Tab label="Item One"></Tab>
                    <Tab label="Item Two"></Tab>
                    <Tab label="Item Three"></Tab>


                </Tabs>
            </AppBar>
            
        </div>
    )
}

export default NavBar;
