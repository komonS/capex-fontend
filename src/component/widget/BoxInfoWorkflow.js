import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UrlContext } from '../../store/UrlProvider'

export default function BoxinfoWorkflow() {
    const { flow } = useContext(UrlContext)

    const [workflow, setWorkflow] = useState(0)
    const [all, setAll] = useState(0)
    const [active, setActive] = useState(0)
    const [inactive, setInactive] = useState(0)

    const getInfo = async () => {
        let res = await axios.get(flow + "info/workflowinfo")
        setAll(res.data.all)
        setActive(res.data.active)
        setInactive(res.data.inactive)
    }

    useEffect(() => {
        getInfo()

    }, [])
    return (
        <div className="row">
            <div className="col-lg-4">
                {/* small box */}
                <div className="info-box">
                    <span className="info-box-icon bg-primary elevation-1">
                        <i className="fas fa-network-wired" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Workflow</span>
                        <span className="info-box-number">
                            {all}
                        </span>
                    </div>
                    {/* /.info-box-content */}
                </div>

            </div>

            <div className="col-lg-4">
                {/* small box */}
                <div className="info-box">
                    <span className="info-box-icon bg-warning elevation-1">
                        <i className="fas fa-clipboard-check" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Active</span>
                        <span className="info-box-number">
                            {active}
                        </span>
                    </div>
                    {/* /.info-box-content */}
                </div>

            </div>
            <div className="col-lg-4">
                {/* small box */}
                <div className="info-box">
                    <span className="info-box-icon bg-danger elevation-1">
                        <i className="fas fa-times-circle" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Inactive</span>
                        <span className="info-box-number">
                            {inactive}
                        </span>
                    </div>
                    {/* /.info-box-content */}
                </div>

            </div>
        </div>
    )
}
