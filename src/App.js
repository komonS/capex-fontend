import React from 'react'
import Home from './component/content/Home'
import Header from './component/layout/Header'
import Sidebar from './component/layout/Sidebar'
import { Switch, Route } from "react-router-dom";
import './App.css'
import Footer from './component/layout/Footer';
import Login from './component/content/Login';
import Orders from './component/content/Orders';
import Capex from './component/content/Capex';
import CapexConfirm from './component/content/CapexConfirm';
import Job from './component/content/Job';
import CapexView from './component/content/CapexView';
import ApprovalView from './component/content/ApprovalView';
export default function App() {
  return (
    <div class="wrapper">
      <Header />

      <Sidebar />
      <div class="content-wrapper">
        <section class="content">
          <div class="container-fluid">
            <Switch>
              <Route path="/approve/view/:capexID" component={ApprovalView} />
              <Route path="/capex/view/:capexID" component={CapexView} />
              <Route path="/job" component={Job} />
              <Route path="/capex/confirm" component={CapexConfirm} />
              <Route path="/capex" component={Capex} />
              <Route path="/orders" component={Orders} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </section>
      </div>
      <Footer />


    </div>
  )
}
