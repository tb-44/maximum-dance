import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Schedule from './components/Schedule/Schedule';
import ParentPortal from './components/ParentPortal/ParentPortal';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ About } path="/about" />
    <Route component={ Schedule } path="/schedule" />
    <Route component={ ParentPortal } path="/parentportal" />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ Contact } path="/contact" />
  </Switch>
)
