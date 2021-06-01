import React, { useState } from 'react'
import ContentHeader from '../widget/ContentHeader'

export default function ViewItem() {
    const [no, setNo] = useState("B-94")
    const [classification, setClassification] = useState("Test Project")
    const [priority, setPriority] = useState("A")
    const [capExp, setCapExp] = useState("test")
    const [total, setTotal] = useState(100)
    const [firstPlan, setFirstPlan] = useState(50)
    const [secordPlan, setSecordPlan] = useState(50)
    const [fullYear, setFullYear] = useState(100)
    const [defer, setDefer] = useState("")
    const [goal, setGoal] = useState("test")
    const [main, setMain] = useState("test")
    const [profix, setProfix] = useState("test")
    const [endDate, setEndDate] = useState("2021-05-31")
    const [startDate, setStartDate] = useState("2021-05-31")
    const [division, setDivision] = useState("IT")
    const [status, setStatus] = useState("success")
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
