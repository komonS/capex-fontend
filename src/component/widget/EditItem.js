import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { UrlContext } from '../../store/UrlProvider'
import ContentHeader from '../widget/ContentHeader'

export default function EditItem(props) {
    const hitory = useHistory()
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
    const [classificationID, setClassificationID] = useState("")
    const [priorityID, setPriorityID] = useState("")
    const [statusID, setStatusID] = useState("")
    const [priorityData, setPriorityData] = useState([
        {
            priorityID: 1,
            priorityName: "A"
        },
        {
            priorityID: 2,
            priorityName: "B"
        },
        {
            priorityID: 3,
            priorityName: "C"
        }
    ])



    const getData = async (capexID) => {
        console.log("capexID : " + capexID)
        let res
        res = await axios.get(url + "capex/capex", {
            params: {
                status: "one",
                capexID: capexID
            }

        })


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
            setClassificationID(res.data[0].classificationID)
            setStatusID(res.data[0].capexStatusID)
            setPriorityID(res.data[0].priorityID)
            //setStartDate(res.data[0].)
        }

    }

    const onSave = async () => {
        let res = await axios.put(url + "capex/capex", {
            capexID: props.capexID,
            capexNo: no,
            capexName: capExp,
            classificationID: classificationID,
            priorityID: priorityID,
            division: division,
            capexYear: fullYear,
            totalPlan: total,
            h1Plan: firstPlan,
            h2Plan: secordPlan,
            goal: goal,
            mainComponents: main,
            expectation: profix,
            capexStatusID: statusID,
        })
        console.log(res.data)
        if (res.data.status == "success") {
            alert(res.data.detail)
        }
    }

    const onResume = async () => {
        let res = await axios.post(flow + "flow/startflow", {
            flowID: props.flowID
        })
        console.log(res.data)
        if (res.data.status == 'success') {
            alert("submit flow complated")
            //hitory.push("/capex/view/" + props.capexID)
        }
    }

    useEffect(() => {
        getData(props.capexID)

    }, [props.capexID])
    return (
        <div>
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
                        <select className="form-control" value={priorityID} onChange={(e) => setPriorityID(e.target.value)}>
                            {priorityData.map((item, index) => (
                                <option value={item.priorityID}>{item.priorityName}</option>
                            ))}
                        </select>

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

                        <input type="number" className="form-control" value={total} onChange={(e) => setTotal(e.target.value)} />
                    </div>
                    <div className="form-group box-capex-view">
                        <label>1st H Plan : </label>
                        <input type="number" className="form-control" value={firstPlan} onChange={(e) => setFirstPlan(e.target.value)} />
                    </div>
                    <div className="form-group box-capex-view">
                        <label>2nd H Plan : </label>
                        <input type="number" className="form-control" value={secordPlan} onChange={(e) => setSecordPlan(e.target.value)} />
                    </div>
                    <div className="form-group box-capex-view">
                        <label>Full Year Plan : </label>
                        <input type="number" className="form-control" value={fullYear} onChange={(e) => setFullYear(e.target.value)} />
                    </div>
                    <div className="form-group box-capex-view">
                        <label>Goal : </label>
                        <textarea className="form-control" rows="5" value={goal} onChange={(e) => setGoal(e.target.value)} ></textarea>
                    </div>
                    <div className="form-group box-capex-view">
                        <label>Main : </label>
                        <textarea className="form-control" rows="5" value={main} onChange={(e) => setMain(e.target.value)} ></textarea>
                    </div>
                    <div className="form-group box-capex-view">
                        <label>Expectattion profit Gain : </label>
                        <textarea className="form-control" rows="5" value={profix} onChange={(e) => setProfix(e.target.value)} ></textarea>
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
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <button className="btn btn-success" onClick={() => onSave()}>Save</button>
                        &nbsp;
                        <button className="btn btn-success" onClick={() => onResume()}>Resume</button>
                    </div>

                </div>
            </div>
        </div>

    )
}
