import React, { useState } from "react";
import '@fontsource/roboto/500.css';
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import ValorAPagar from "./pages/ValorAPagar";
import Sucursales from "./pages/Sucursales";

function App() {
  const [welcomeState, setWelcomeState] = useState(true);

  const onMouseOverLogo = () => {
    setWelcomeState(false)
  }

  return (
    <div >
      <Router>
      <NavBar onMouseOver={onMouseOverLogo}/>
        <Switch>
          <Route exact path="/" component={Bienvenida}/>
          <Route exact path="/ValorAPagar" component={ValorAPagar}/>
          <Route exact path="/Sucursales" component={Sucursales}/>
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
