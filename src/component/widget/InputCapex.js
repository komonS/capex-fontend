import axios from 'axios'
import React, { useContext, useState } from 'react'
import { CapexContext } from '../../store/CapexProvider'
import { UrlContext } from '../../store/UrlProvider'
import { UserContext } from '../../store/UserProvider'
export default function InputCapex() {
    const { url } = useContext(UrlContext)
    const { user } = useContext(UserContext)
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
    const [className, setClassName] = useState("")
    const [year, setYear] = useState("")
    const [capexName, setCapexName] = useState("")




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


    const [classData, setClassData] = useState([
        {
            classNo: 1,
            className: "1) New product development"
        },
        {
            classNo: 2,
            className: "2) Production Expansion"
        },
        {
            classNo: 3,
            className: "3) Environment Conservation"
        },
        {
            classNo: 4,
            className: "4) Rationalization"
        },
        {
            classNo: 5,
            className: "5) Maintenance"
        },
        {
            classNo: 6,
            className: "6) R&D"
        },
        {
            classNo: 7,
            className: "7) Other"
        },

    ])

    const saveCapex = async () => {
        if (classification != "") {


            let data = {
                capexName: capExp,
                capexNo: "",
                classificationID: classification,
                priorityID: priority,
                division: user.devision,
                capexYear: year,
                totalPlan: total,
                h1Plan: firstPlan,
                h2Plan: secordPlan,
                goal: goal,
                mainComponents: main,
                expectation: profix,
                capexStatusID: "6"
            }

            //console.log(data)

            let res = await axios.post(url + "capex/capex", {
                capexName: capExp,
                capexNo: "",
                classificationID: classification,
                priorityID: priority,
                division: user.devision,
                capexYear: year,
                totalPlan: total,
                h1Plan: firstPlan,
                h2Plan: secordPlan,
                goal: goal,
                mainComponents: main,
                expectation: profix,
                capexStatusID: "6"
            })
            //console.log(res.data)
            if (res.data.status === "success") {
                // setCapex({
                //     capexID: res.data.capexID,
                //     capexName: className,
                //     capexNo: "",
                //     classificationID: capexName,
                //     priorityID: priority,
                //     division: user.devision,
                //     capexYear: year,
                //     totalPlan: total,
                //     h1Plan: firstPlan,
                //     h2Plan: secordPlan,
                //     goal: goal,
                //     mainComponents: main,
                //     expectation: profix,
                //     capexStatusID: "6"
                // })
                getCapex(res.data.capexID)
                setClassification("")
            } else {
                alert(res.data.detail + " please contact admin")
            }


        } else {
            alert("Please select classification")
        }

    }

    const getCapex = async (capexID) => {
        let res = await axios.get(url + "capex/capex", {
            params: {
                status: "one",
                capexID: capexID
            }

        })
        console.log(res.data[0])
        setCapex(res.data[0])
    }

    const setClassNameData = (data) => {
        var index = data.nativeEvent.target.selectedIndex;
        setClassification(data.target.value)
        setClassName(data.nativeEvent.target[index].text)
        setCapexName(data.nativeEvent.target[index].text)
        console.log(data)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Classification</label>
                        <select className="form-control" value={classification} onChange={(e) => setClassNameData(e)}>
                            <option value="">-- SELECT --</option>
                            {classData.map((item, index) => (
                                <option key={index} value={item.classNo} name={item.className}>{item.className}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* <div className="col-md-3">
                    <div className="form-group">
                        <label>Capex Name</label>
                        <input type="text" className="form-control" value={className} onChange={(e) => setClassName(e.target.value)} />
                    </div>
                </div> */}

                <div className="col-md-3">
                    <div className="form-group">
                        <label>Priority</label>
                        <select className="form-control" onChange={(e) => setPriority(e.target.value)}>
                            <option value="">-- SELECT --</option>
                            {priorityData.map((item, index) => (
                                <option value={item.priorityID}>{item.priorityName}</option>
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
                        <input className="form-control" type="text" readOnly={true} value={user.devision} />
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
                        <label>Capex Year</label>
                        <input className="form-control" type="text" placeholder="YYYY" onChange={(e) => setYear(e.target.value)} />
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


                <div className="col-md-12">
                    <div className="form-group ">
                        <label>Upload File</label>
                        <div className="form-inline">
                            <input type="file" className="form-control" />
                            <button className="btn btn-success">Upload</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <button className="btn btn-success" onClick={() => saveCapex()}>Save</button>
                </div>
            </div>
        </div>
    )
}
