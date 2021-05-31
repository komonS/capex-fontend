import React, { useContext, useState } from 'react'

import { MenuContext } from '../../store/MenuProvider'
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { UrlContext } from '../../store/UrlProvider'
export default function Header() {
    const { login, setLogin } = useContext(LoginContext)
    const { menu, setMenu } = useContext(MenuContext)
    const { user, setUser } = useContext(UserContext)



    const [notify, setstate] = useState([
        {
            notiID: 1,
            notiMessage: "Noti 1",
            notiTime: "2021-05-01"
        },
        {
            notiID: 2,
            notiMessage: "Noti 2",
            notiTime: "2021-05-02"
        },
        {
            notiID: 3,
            notiMessage: "Noti 3",
            notiTime: "2021-05-03"
        }
    ])




    const Logined = () => {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-bell" />
                        <span className="badge badge-warning navbar-badge">{notify.length}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">{notify.length} Notifications</span>
                        <div className="dropdown-divider" />
                        {
                            notify.map((item, index) => (
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2" /> {item.notiMessage}
                                    <span className="float-right text-muted text-sm">{item.notiTime}</span>
                                </a>
                            ))
                        }
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link"></a>
                </li>
            </ul>
        )
    }


    return (
        <nav className="main-header navbar navbar-expand  navbar-dark bg-blue">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
            </ul>
            {/* Right navbar links */}
            {login ? <Logined /> : null}




        </nav >

    )
}
