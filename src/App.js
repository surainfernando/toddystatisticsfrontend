import logo from './logo.svg';
import './App.css';
import graph from './UIClass/graph.js'
import graph2 from './UIClass/graph2.js'
import graph3 from './UIClass/graph3.js'
import Home from './UIClass/Home.js'
import {ReactTable} from 'react-table';


import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div>
     
    <Router>
    <nav className="navbar">
    <Link className="navbar-brand" >MEET  YOUR  REPRESENTATIVE</Link>
    </nav>
        <div>
          
          <Route exact path='/' component={Home} />
          <Route exact path='/graph2' component={graph2} />
          <Route exact path='/graph3' component={graph3} />
          


       
          
        </div>
      </Router>
      </div>


  );
}

export default App;
