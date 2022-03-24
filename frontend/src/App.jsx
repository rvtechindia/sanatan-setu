import React, { useState,useEffect } from "react";

import { ToastContainer } from "./utils/toast";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./pages/Home";
import { ListingDetail } from "./pages/ListingDetail";
import { Dashboard } from "./pages/Dashboard";
import { Loader } from "./components/loader/Loader";
import { Footer } from "./components/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import { loadUser } from "./redux/actions/userAction";
import { useDispatch } from "react-redux";
import Basic from "./pages/TestFormik";
import AuthRoute from "./routes/AuthRoute";
import ListBusiness from "./dashboard/ListBusiness";

//import actions

import {getCompanies} from "./redux/actions/companyAction"
import ListingPage from "./pages/ListingPage";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getCompanies())
  }, []);

  const [loader, setLoader] = useState(true);
  return (
    <>
      {/* <Loader /> */}
      <ToastContainer />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/listDetails/:id" component={ListingDetail} />
        <Route path="/listingPage" component={ListingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/test" component={Basic} />
        <Route path="/listbusiness" component={ListBusiness}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
