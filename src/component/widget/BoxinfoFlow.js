import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { UrlContext } from '../../store/UrlProvider'
export default function BoxinfoFlow() {
    const { flow } = useContext(UrlContext)
    const { id } = useParams()

    const [all, setAll] = useState(0)
    const [active, setActive] = useState(0)
    const [finish, setFinish] = useState(0)

    const getInfo = async () => {
        let res = await axios.get(flow + "info/flowinfo", {
            params: {
                workflowID: id
            }
        })
        setAll(res.data.all)
        setActive(res.data.active)
        setFinish(res.data.finish)
    }

    useEffect(() => {
        getInfo()

    }, [])
    return (

        <div className="row">
            <div className="col-lg-4">
                {/* small box */}

                <Link to={"/flow/detail/" + id + "/all"} className="info-box">

                    <span className="info-box-icon bg-primary elevation-1">
                        <i className="fas fa-network-wired" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text ">All</span>
                        <span className="info-box-number">
                            {all}
                        </span>
                    </div>

                    {/* /.info-box-content */}
                </Link>

            </div>

            <div className="col-lg-4">
                {/* small box */}
                <Link to={"/flow/detail/" + id + "/1"} className="info-box">
                    <span className="info-box-icon bg-warning elevation-1">
                        <i className="fas fa-clipboard-check" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Active</span>
                        <span className="info-box-number">
                            {active}
                        </span>
                    </div>
                    {/* /.info-box-content */}
                </Link>

            </div>
            <div className="col-lg-4">
                {/* small box */}
                <Link to={"/flow/detail/" + id + "/2"} className="info-box">
                    <span className="info-box-icon bg-success elevation-1">
                        <i className="fas fa-flag-checkered" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Finish</span>
                        <span className="info-box-number">
                            {finish}
                        </span>
                    </div>
                    {/* /.info-box-content */}
                </Link>

            </div>
        </div>

    )
}
