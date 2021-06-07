import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UrlContext } from '../../store/UrlProvider'
import ContentHeader from '../widget/ContentHeader'

export default function ViewItem(props) {
    const { url, flow } = useContext(UrlContext)
    const [no, setNo] = useState("")
    const [classification, setClassification] = useState("")
    const [priority, setPriority] = useState("")
    const [capExp, setCapExp] = useState("")
    const [total, setTotal] = useState(0)
    const [firstPlan, setFirstPlan] = useState(0)
    const [secordPlan, setSecordPlan] = useState(0)
    const [fullYear, setFullYear] = useState(0)
    const [defer, setDefer] = useState("")
    const [goal, setGoal] = useState("")
    const [main, setMain] = useState("")
    const [profix, setProfix] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [division, setDivision] = useState("")
    const [status, setStatus] = useState("")

    const getData = async (capexID, flowID) => {
        console.log("capexID : " + capexID)
        console.log("flowID : " + flowID)
        let res
        if (capexID != undefined) {
            res = await axios.get(url + "capex/capex", {
                params: {
                    status: "one",
                    capexID: capexID
                }

            })
        } else {
            res = await axios.get(url + "capex/capex", {
                params: {
                    status: "flow",
                    flowID: flowID
                }

            })
        }


        console.log(res.data)
        if (res.data.length > 0) {
            setNo(res.data[0].capexNo)
            setPriority(res.data[0].priorityName)
            setClassification(res.data[0].classificationName)
            setCapExp(res.data[0].capexName)
            setDivision(res.data[0].division)
            setTotal(res.data[0].totalPlan)
            setFirstPlan(res.data[0].h1Plan)
            setSecordPlan(res.data[0].h2Plan)
            setFullYear(res.data[0].h1Plan + res.data[0].h2Plan)
            setGoal(res.data[0].goal)
            setMain(res.data[0].mainComponents)
            setProfix(res.data[0].expectation)
            setStatus(res.data[0].capexStatusName)
            //setStartDate(res.data[0].)
        }

    }

    useEffect(() => {
        getData(props.capexID, props.flowID)

    }, [props.capexID, props.flowID])
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="form-group box-header">
                    <label>Capex No. : </label>
                    <label>{no}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>Classification : </label>
                    <label>{classification}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>Priority. : </label>
                    <label>{priority}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>Capital Expenditure Item : </label>
                    <label>{capExp}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>Division : </label>
                    <label>{division}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>Total Investment amount : </label>
                    <label>{total}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>1st H Plan : </label>
                    <label>{firstPlan}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>2nd H Plan : </label>
                    <label>{secordPlan}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>Full Year Plan : </label>
                    <label>{fullYear}</label>
                </div>
                <div className="form-group box-capex-view">
                    <label>Goal : </label>
                    <textarea className="form-control" rows="5" value={goal} readOnly={true} ></textarea>
                </div>
                <div className="form-group box-capex-view">
                    <label>Main : </label>
                    <textarea className="form-control" rows="5" value={main} readOnly={true} ></textarea>
                </div>
                <div className="form-group box-capex-view">
                    <label>Expectattion profit Gain : </label>
                    <textarea className="form-control" rows="5" value={profix} readOnly={true} ></textarea>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group box-header">
                            <label>Status : </label>
                            <label>{status}</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group box-capex-view">
                            <label>Start Date : </label>
                            <label>{startDate}</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group box-capex-view">
                            <label>End Date : </label>
                            <label>{endDate}</label>
                        </div>
                    </div>
                    <div className="col-md-12 box-header">
                        <label>File</label>
                    </div>
                </div>


            </div>



        </div>

    )
}
