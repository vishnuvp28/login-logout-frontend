import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
// import axios from "axios";
import LoginSuccess from "./components/LoginSuccess";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FacebookSuccess from "./components/FacebookSuccess";
import FbProfile from "./Pages/FbProfile";
import GithubProfile from "./Pages/GithubProfile";
import GithubSuccess from "./components/GithubSuccess";


function App() {
   const history=useHistory();
 
   return (
      <div className="App">
         <div className="App1">
         <nav>
            <Link className="login-button" to="/login">
               Login
            </Link>
            <p onClick={()=>history.push("/")} className="logout-button">
               Logout
            </p>
         </nav>
         <Switch>
             <Route exact path="/login" component={Login} />
            <Route exact path="/login/success" component={LoginSuccess} />
            <Route exact path="/login/error" component={Login} />
            <Route exact path="/login/fbsuccess" component={FacebookSuccess} />
            <Route exact path="/login/fberror" component={Login} />
            <Route exact path="/login/ghsuccess" component={GithubSuccess} />
            <Route exact path="/login/gherror" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/fbprofile" component={FbProfile} />
            <Route exact path="/ghprofile" component={GithubProfile} />
         </Switch>
         </div>
      </div>
   );
}

export default App;