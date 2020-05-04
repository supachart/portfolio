import * as React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Layout from "../components/Layout";
import Contact from "../components/Contact";

const Routes = () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
    <Layout>
      <Route path="/experience" component={Experience} />
    </Layout>
    <Layout>
      <Route path="/skills" component={Skills} />
    </Layout>
    <Layout>
      <Route path="/contact" component={Contact} />
    </Layout>
    <Layout>
      <Route component={Home} />
    </Layout>
  </Switch>
);

export default Routes;
