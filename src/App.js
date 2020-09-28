import React, { useState, useEffect } from "react";

import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Tranning from "./pages/Tranning";
import Monitor from "./pages/Monitor";
import Summary from "./pages/Summary";
import CreateUser from "./pages/CreateUser";
import PageRegister from "./pages/PageRegister";

import AddKeyword from "./pages/AddKeyword";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
// import SideNav from "./components/SideNav";

import TopNav from "./components/TopNav";
import "./App.css";
import "./style/btn.css";
import "./style/media.css";
import ForgetPassword from "./pages/ForgetPassword";

export const AuthContext = React.createContext();
export const SelectContext = React.createContext();
export const NavContext = React.createContext();
export const DisplayContext = React.createContext();
const SideNav = React.lazy(() => import("./components/SideNav"));

const App = () => {
  const [auth, setAuth] = useState(false);
  const [animateNav, setAnimateNav] = useState("0px");
  const [display, setDisplay] = useState("none");
  // const [currentBot, setCurrentBot] = useState(1);
  const checkAuth = () => {
    const authState = localStorage.getItem("auth");
    if (authState) setAuth(authState);

    // const chatbotState = localStorage.getItem("currentBot");
    // if (chatbotState) {
    //   setCurrentBot(chatbotState);
    // }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const PrivateRoute = ({ auth, component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (auth ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />)}
      />
    );
  };

  const PrivateLogin = ({ auth, component: Component, ...rest }) => {
    return (
      <Route {...rest} render={(props) => (!auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />)} />
    );
  };

  const Routes = () => {
    const Auth = React.useContext(AuthContext);

    return (
      <Switch>
        <PrivateRoute exact path="/" component={AddKeyword} auth={Auth.auth} />
        <PrivateRoute exact path="/add_keyword" component={AddKeyword} auth={Auth.auth} />
        <PrivateRoute exact path="/tranning" component={Tranning} auth={Auth.auth} />
        <PrivateRoute exact path="/monitor" component={Monitor} auth={Auth.auth} />
        <PrivateRoute exact path="/summary" component={Summary} auth={Auth.auth} />
        <PrivateRoute exact path="/create_user" component={CreateUser} auth={Auth.auth} />
        <PrivateLogin exact path="/register" component={PageRegister} auth={Auth.auth} />
        <PrivateLogin exact path="/forget_password" component={ForgetPassword} auth={Auth.auth} />
        {/* <PrivateRoute exact path="/chatbot" component={ChatBot} auth={Auth.auth} /> */}

        <PrivateLogin exact path="/login" component={Login} auth={Auth.auth} />
        <Route exact component={NotFound} />
      </Switch>
    );
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {/* <SelectContext.Provider value={{ currentBot, setCurrentBot }}> */}
      <NavContext.Provider value={{ animateNav, setAnimateNav }}>
        <DisplayContext.Provider value={{ display, setDisplay }}>
          <Router>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>

            {auth && (
              <div className="main">
                {auth && (
                  <React.Suspense fallback={<p>loading ...</p>}>
                    <SideNav animateNav={animateNav} display={display} />
                  </React.Suspense>
                )}
                <div className="divnav"></div>

                <div className="body">
                  {auth && <TopNav />}
                  <Routes />
                </div>
              </div>
            )}
            {!auth && <Routes />}
          </Router>
        </DisplayContext.Provider>
      </NavContext.Provider>
      {/* </SelectContext.Provider> */}
    </AuthContext.Provider>
  );
};

export default App;
