
import './App.css';
//import Header from './Header';
import {
  BrowserRouter as Router,
  
  Route,Switch,
  
} from "react-router-dom";
import Cards from './Cards';


function App() {
  return (
    <div className="App">
      
     
      
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>am chat</h1>
          </Route>
          <Route path="/swipe">
            
            <Cards/>
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;



