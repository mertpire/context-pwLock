import React from "react";
import Edit from "./Edit";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Add from "./Add";
import { PasswordsProvider } from "./PasswordContext";

const App = () => {
  
  return (
    <PasswordsProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/addNewSite" component={Add}></Route>
          <Route exact path="/editPage/:id" component={Edit}></Route>
          
        </Switch>
      </div>
    </PasswordsProvider>
  );
};

export default App;
