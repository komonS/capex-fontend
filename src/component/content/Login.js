import axios from 'axios'
import React, { useContext, useState } from 'react'
import { UrlContext } from '../../store/UrlProvider'
import { LoginContext } from '../../store/LoginProvider'
import { UserContext } from '../../store/UserProvider'
import { useHistory } from "react-router-dom";
export default function Login() {
    const { login, setLogin } = useContext(LoginContext)
    const { url, ldap } = useContext(UrlContext)
    const { user, setUser } = useContext(UserContext)

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onLogin = async (event) => {
        event.preventDefault()
        console.log("login")
        if (username != '') {
            let res = await axios.get(ldap + 'data/login', {
                params: {
                    username: username,
                    password: password
                }
            })

            if (res.data.status === "success") {

                let userinfo = await axios.get(ldap + 'data/userinfo', {
                    params: {
                        userID: username
                    }
                })
                if (userinfo.data.status != 'error') {
                    //console.log(userinfo.data)
                    localStorage.userID = username
                    setUser(userinfo.data)
                    setLogin(true)
                    history.push('/');
                } else {
                    alert('something is worn, please login again')
                }
            } else {
                alert('username or password incorrect, please login again')
            }

        } else {
            alert("Please enter usernmae")
        }
    }
    return (
        <div className="box-center">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card card-primary">
                        <div className="card-header text-center">
                            <h3 className="card-title">Login</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={(e) => onLogin(e)} >
                            <div className="card-body">
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputEmail3" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>

                            </div>
                            {/* /.card-body */}
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-info">Login</button>
                            </div>
                            {/* /.card-footer */}
                        </form>
                    </div>

                </div>
                <div className="col-md-3"></div>
            </div>


        </div>

    )
}
