import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Error from "./pages/Error";
import Home from "./pages/Home";
// import Header from "./components/Header/Header";
import Jams from "./components/Jams/Jams";
import Video from "./components/Video/Video";
import UpcomingEvents from "./components/UpcomingEvents/Events";
import Tracks from "./components/Tracks/Tracks";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";

import Panel from "./pages/Panel";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/panel" component={Panel} />
          <Route exact path="/ourjams" component={Jams} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/upcomingevents" component={UpcomingEvents} />
          <Route exact path="/tracks" component={Tracks} />
          <Route exact path="/news" component={News} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
       
        </Switch>
        
      
      </Router>
      
    </>
  );
}

export default App;
