import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import './components/Navbar.css'
import './components/Banner.css'
import './components/GymClass.css'
import './components/About.css'
import './components/ChoseUs.css'
import './components/Team.css'
import './components/Subscribe.css'
import './components/MonthlyPlan.css'
import './components/BMI.css'
import './components/Testimonial.css'
import './components/Footer.css'
import './components/PageHeader.css'
import './components/Services.css'
import './components/Contact.css'
import './components/Ticket.css'

import Navbar from './components/Navbar';
import HomeNav from "./routes/HomeNav";
import AboutNav from "./routes/AboutNav";
import FeaturesNav from "./routes/FeaturesNav";
import ContactNav from "./routes/ContactNav";
import Footer from './components/Footer';
import BmiNav from "./routes/BmiNav";
import UserNav from "./routes/UserNav";
import VenueNav from "./routes/VenueNav";
import TicketNav from "./routes/TicketNav";
import LoginNav from "./routes/LoginNav";
import RegisterNav from "./routes/RegisterNav";
import FAQNav from "./routes/FAQNav";



function App() {
  return (
    <Router basename="/Gym-Website"> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeNav}></Route>
        <Route exact path="/about" component={AboutNav}></Route>
        <Route exact path="/features" component={FeaturesNav}></Route>
        <Route exact path="/contact" component={ContactNav}></Route>
        <Route exact path="/ticket" component={TicketNav}></Route>
        <Route exact path="/bmi" component={BmiNav}></Route>
        <Route exact path="/usercount" component={UserNav}></Route>
        <Route exact path="/venue" component={VenueNav}></Route>
        <Route exact path="/login" component={LoginNav}></Route>
        <Route exact path="/register" component={RegisterNav}></Route>
        <Route exact path="/question" component={FAQNav}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
