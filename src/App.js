import React from 'react';
// import 'rsuite/lib/styles/index.less';
import { Message } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Sales tracker</h1>
       <Message 
        type="success"
        title="Success"
        description={
          <p>Hello this is a success message</p>
        }
       />
      </header>
    </div>
  );
}

export default App;
