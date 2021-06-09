import React, { useContext, useEffect } from 'react'
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
import { UserContext } from './store/UserProvider'
import { UrlContext } from './store/UrlProvider'
import { LoginContext } from './store/LoginProvider'
import axios from 'axios';
import Logout from './component/widget/Logout';
import Workflow from './component/content/Workflow';
import CapexEdit from './component/content/CapexEdit';
export default function App() {
  const { url, ldap } = useContext(UrlContext)
  const { user, setUser } = useContext(UserContext)
  const { login, setLogin } = useContext(LoginContext)

  const setData = async () => {
    if (localStorage.userID != null) {
      let userinfo = await axios.get(ldap + 'data/userinfo', {
        params: {
          userID: localStorage.userID
        }
      })
      console.log(userinfo.data)
      setUser(userinfo.data)
      setLogin(true)
    }

  }

  useEffect(() => {
    setData()

  }, [])
  return (
    <div class="wrapper">
      <Header />

      <Sidebar />
      <div class="content-wrapper">
        <section class="content">
          <div class="container-fluid">
            <Switch>
              <Route path="/capex/edit/:capexID/:flowID" component={CapexEdit} />
              <Route path="/workflow" component={Workflow} />
              <Route path="/approve/view/:flowID" component={ApprovalView} />
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
      <Logout />

    </div>
  )
}
