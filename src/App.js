
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./componont/Header"
import Home from "./componont/Home"
import Checkout from './componont/Checkout';
function App() {
  return (
    <Router>
    <div className="app">
     <Switch>
       <Route path="/checkout">
         <Header/>
         <Checkout />
         </Route>
       <Route path="/login"> <h1>Fiori</h1></Route>
       <Route path="/">
       <Header />
       <Home />
       </Route>
       <Route></Route>
       <Route></Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
