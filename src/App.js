

//import Header from './Header';
import {
  BrowserRouter as Router,
  
  Route,Switch,
  
} from "react-router-dom";

import Home from './pages/home/Home';
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";


function App() {
  return (
    <div className="App">
      
     
      
      <Router>
        <Switch>

          <Route path="/chat">
            <h1>am chat</h1>
          </Route>

          <Route path="/swipe">
            <Home/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>

          <Route path="/login">
            <Login />
          </Route>



        </Switch>
      </Router>
      

    </div>
  );
}

export default App;



