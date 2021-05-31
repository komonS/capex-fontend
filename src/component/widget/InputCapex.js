import React, { useContext, useState } from 'react'
import { CapexContext } from '../../store/CapexProvider'
export default function InputCapex() {
    const { capex, setCapex } = useContext(CapexContext)

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


    const saveCapex = () => {
        setCapex({
            capexNo: "",
            classification: classification,
            priority: priority,
            capExp: capExp,
            total: total,
            firstPlan: firstPlan,
            secordPlan: secordPlan,
            fullYear: fullYear,
            defer: defer,
            goal: goal,
            main: main,
            profix: profix,
            endDate: endDate,
            startDate: startDate,
            status: "Waiting"
        })
    }

    const [priorityData, setPriorityData] = useState([
        {
            priorityName: "A"
        },
        {
            priorityName: "B"
        },
        {
            priorityName: "C"
        }
    ])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Classification</label>
                        <input className="form-control" type="text" onChange={(e) => setClassification(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Priority</label>
                        <select className="form-control" onChange={(e) => setPriority(e.target.value)}>
                            <option value="">-- SELECT --</option>
                            {priorityData.map((item, index) => (
                                <option value={item.priorityName}>{item.priorityName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Capital Expenditure Item</label>
                        <input className="form-control" type="text" onChange={(e) => setCapExp(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Division</label>
                        <input className="form-control" type="text" readOnly={true} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Total Investment Amount</label>
                        <input className="form-control" type="number" onChange={(e) => setTotal(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>1st H Plan</label>
                        <input className="form-control" type="number" onChange={(e) => setFirstPlan(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>2nd H Plan</label>
                        <input className="form-control" type="number" onChange={(e) => setSecordPlan(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Full Year Plan</label>
                        <input className="form-control" type="number" onChange={(e) => setFullYear(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Deferred</label>
                        <input className="form-control" placeholder="YYYY" onChange={(e) => setDefer(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Goal</label>
                        <textarea rows="5" className="form-control" onChange={(e) => setGoal(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Main Component</label>
                        <textarea rows="5" className="form-control" onChange={(e) => setMain(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Expectation Profit Gain</label>
                        <textarea rows="5" className="form-control" onChange={(e) => setProfix(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Start Date</label>
                        <input type="date" className="form-control" onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>End Date</label>
                        <input type="date" className="form-control" onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Upload File</label>
                        <div className="form-inline">

                            <input type="file" className="form-control" />
                            <button className="btn btn-success">Upload</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-success" onClick={() => saveCapex()}>Save</button>
                </div>
            </div>
        </div>
    )
}
