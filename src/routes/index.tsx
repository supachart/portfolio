import * as React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import About from "../components/About";

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route path="/skills" component={Skills} />
      <Route component={Home} />
    </Switch>
  </Layout>
);

export default Routes;
