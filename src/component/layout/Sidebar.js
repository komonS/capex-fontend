import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Sidebar.css'
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
export default function Sidebar() {
    const { user, setUser } = useContext(UserContext)
    const { login, setLogin } = useContext(LoginContext)



    return (
        <aside className="main-sidebar sidebar-light-primary elevation-4 ">
            {/* Brand Logo */}


            <Link to="/" className="brand-link text-center bg-blue">
                <img src="image/logo/logo.png" alt="Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text text-brand">Capex</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    {login ? <div className="image">
                        <img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div> : null}

                    <div className="info">
                        {login ? <a href="#" className="d-block" data-toggle="modal" data-target="#logout" >{user.fullname +" : "+user.devision}</a> : <Link to="/login">Login</Link>}

                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/capex" className="nav-link">
                                <i className="nav-icon fas fa-chart-bar" />
                                <p>
                                    Capex
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orders" className="nav-link">
                                <i className="nav-icon fas fa-list-alt" />
                                <p>
                                    Orders
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/job" className="nav-link">
                                <i className="nav-icon fas fa-tasks" />
                                <p>
                                    Job Approval
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}
