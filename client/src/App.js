import './App.css';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import {Fragment} from 'react';
//Redux
import {Provider} from 'react-redux';
import store from './store';


const App = () =>
<Provider store={store}>
  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <section className="container">
        <Alert/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </section>
    </Fragment>
  </Router>
</Provider>
  


export default App;
