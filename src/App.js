import {BrowserRouter, Switch, Route} from "react-router-dom";
import login from "./pages/Login"
import home from "./pages/Home"
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login}/>
      <Route path="/home" exact component={home}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
