
import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './Home';

class App extends Component {
    
    state = {  }

    render() { 
        return (  
            <HashRouter basename='/'>  
                <Route exact path="/" component={Home} />                      
            </HashRouter>
        );
    }
}
 
export default App;