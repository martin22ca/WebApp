import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Landing";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Attendence from "./pages/Attendence";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/attendence" exact component={Attendence} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
