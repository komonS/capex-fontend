import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UrlContext } from '../../store/UrlProvider'

export default function ApprovalItem(props) {
    const { url, flow } = useContext(UrlContext)

    const [data, setData] = useState([])
    const [flowApprovalID, setFlowApprovalID] = useState(0)

    const [statusApprove, setStatusApprove] = useState(0)
    const [comment, setComment] = useState("")

    const getApprovalData = async (flowID) => {
        let res = await axios.get(flow + "approval/approval", {
            params: {
                flowID: flowID,
                approval: localStorage.userID
            }
        })
        setFlowApprovalID(res.data[0].flowApprovalID)
        setData(res.data)
        console.log(res.data)
    }

    const onSubmit = async () => {
        let res = await axios.post(flow + "approval/changestatus", {
            flowID: props.flowID,
            flowApprovalID: flowApprovalID,
            status: statusApprove,
            comment: comment
        })
        console.log(res.data)
        if (res.data.status) {
            alert(res.data.detail)
        } else {
            alert(res.data.detail)
        }
    }

    useEffect(() => {
        getApprovalData(props.flowID)

    }, [props.flowID])

    return (
        <div className="row box-capex-view">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div className="forn-group">
                    <label>Comment : </label>
                    <textarea className="form-control" rows="5" onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                <div className='form-group'>
                    <label>select choice : </label>
                    <select className="form-control" onChange={(e) => setStatusApprove(e.target.value)} >
                        <option value=""> -- SELECT -- </option>
                        <option value="3"> Approve </option>
                        <option value="4"> Reject </option>
                        <option value="5"> Rework </option>
                    </select>
                </div>
                <div className="text-center">
                    <button className="btn btn-success" onClick={() => onSubmit()}>Submit</button>
                </div>
            </div>
            <div className="col-md-3">

            </div>

        </div>
    )
}
