

//import Header from './Header';
import {
  BrowserRouter as Router,
  
  Route,Switch,
  
} from "react-router-dom";
import Cards from "./components/card/Cards";
import Header from "./components/header/Header";
import Chats from "./Chats";
import Home from './pages/home/Home';
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import SwipeButtons from "./SwipeButtons";


function App() {
  return (
    <div className="App">
      
     
      
      <Router>
        <Switch>

          <Route path="/chats">
          <Header backButton="/"/>


            <Chats/>
          </Route>

          
          <Route path="/register">
            <Register/>
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
          <Header/>

            <Cards/>
            <SwipeButtons/>
          </Route>



        </Switch>
      </Router>
      

    </div>
  );
}

export default App;



