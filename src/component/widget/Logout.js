import React, { useContext } from 'react'
import { LoginContext } from '../../store/LoginProvider'

export default function Logout() {
    const { login, setLogin } = useContext(LoginContext)
    const onLogout = () => {
        setLogin(false)
        localStorage.clear()
    }
    return (
        <div className="modal fade" id="logout">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                        <div className="text-center">
                            <p>
                                You need to logout
                            </p>
                            <button className="btn btn-warning btn-lg" onClick={() => onLogout()}>Logout</button>
                        </div>

                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
