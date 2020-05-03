import * as React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Layout from "../components/Layout";

const Routes = () => (
  <main>
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
    </Switch>
  </main>
);

export default Routes;
