import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import ContentHeader from '../widget/ContentHeader'
import { ConfirmContext } from '../../store/ConfirmProvider'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UrlContext } from '../../store/UrlProvider'
import { UserContext } from '../../store/UserProvider'
/** moment for date */
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';
export default function CapexConfirm() {
    const { user } = useContext(UserContext)
    const { confirm, setConfirm, setUnConfirm, clearConfirm } = useContext(ConfirmContext)
    const { url, flow } = useContext(UrlContext)

    const [title, setTitle] = useState("confirm capex table")
    const [page, setPage] = useState(10)
    const [perPage, setPerPage] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const [column, setColumn] = useState([
        {
            name: 'CapexID',
            selector: 'capexID',
            sortable: true,
        },
        {
            name: 'Classification',
            selector: 'classificationName',
            sortable: true,
        },
        {
            name: 'Priority',
            selector: 'priorityName',
            sortable: true,
        },
        {
            name: 'Capital Expenditure Item',
            selector: 'expectation',
            sortable: true,
        },
        {
            name: 'Capex Year',
            selector: 'capexYear',
            sortable: true,
        },
        {
            name: 'Division',
            selector: 'division',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'capexStatusName',
            sortable: true,
        },
        {
            name: 'Option',
            sortable: true,
            cell: row =>
                <div>
                    <Link to={"/capex/view/" + row.capexID}><button className="btn btn-info">View</button></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => setUnConfirm(row.capexID)}>remove</button>
                </div>,
        }
    ])

    const [approval, setApproval] = useState([])
    const [flowID, setFlowID] = useState(0)
    const [flowStatus, setFlowStatus] = useState("")



    const getApproval = async () => {
        let res = await axios.get(url + "approval/approval", {
            params: {
                status: "division",
                division: user.devision
            }
        })
        setApproval(res.data)
        console.log(res.data)
    }



    const onSubmit = async () => {
        confirm.forEach(async (item) => {
            //console.log(item.capexID)
            let createStatus = await createFlow()
            console.log(createStatus)
            if (createStatus.status === "success") {
                let approvalStatus = await createApproval(createStatus.flowID)
                console.log(approvalStatus)
                if (approvalStatus.status === "success") {
                    let startFlowStatus = await startFlow(createStatus.flowID)
                    console.log(startFlowStatus)
                    if (approvalStatus.status !== "success") {
                        alert(startFlowStatus.detail)
                    } else {
                        let flow = await getFlowStatus(createStatus.flowID)
                        let createflow = await createCapexFlow(createStatus.flowID, flow.flowStatusName)
                        let createfd = await createCapexFlowDetail(item.capexID, createflow.capexFlowID)

                        if (createfd.status !== "success") {
                            alert(createfd.detail)
                        }
                    }
                } else {
                    alert(approvalStatus.detail)
                }
            } else {
                alert(createStatus.detail)
            }
        });

        clearConfirm()
        alert("create flow and approval complated, please checking in workflow")

        //console.log(sd + " : " + ed)
    }

    const createFlow = async () => {

        let sd = moment().format("YYYY-MM-DD")
        let ed = moment().add(30, 'd').format("YYYY-MM-DD")
        let res = await axios.post(flow + "flow/create", {
            workflowID: 4003,
            start: sd,
            end: ed,
            requester: localStorage.userID
        })

        setFlowID(res.data.flowID)
        return {
            status: res.data.status,
            detail: res.data.detail,
            flowID: res.data.flowID
        }
    }

    const createApproval = async (flowID) => {
        let st = "";
        let res = await axios.post(flow + "approval/create", {
            flowID: flowID,
            approval: approval
        })
        st = res.data.status
        return {
            status: res.data.status,
            detail: res.data.detail
        }
    }

    const startFlow = async (flowID) => {
        let st = "";
        let res = await axios.post(flow + "flow/startflow", {
            flowID: flowID
        })
        st = res.data.status
        return {
            status: res.data.status,
            detail: res.data.detail
        }
    }

    const getFlowStatus = async (flowID) => {
        let res = await axios.get(flow + "flow/flow", {
            params: {
                status: 3,
                flowID: flowID
            }
        })

        return res.data[0]
    }

    const createCapexFlow = async (flowID, flowStatus) => {
        let res = await axios.post(url + "capexflow/capexflow", {
            flowID: flowID,
            flowStatus: flowStatus
        })

        return res.data
    }

    const createCapexFlowDetail = async (capexID, capexFlowID) => {
        let res = await axios.post(url + "capexFlowDetail/capexFlowDetail", {
            capexID: capexID,
            capexFlowID: capexFlowID
        })
        return res.data
    }





    useEffect(() => {
        getApproval()

    }, [])



    return (
        <div>
            <ContentHeader name="Capex Confirm" />
            <div>
                <DataTable
                    title={title}
                    columns={column}
                    data={confirm}
                    pagination
                    className="table table-hover"
                    fixedHeader={true}
                    paginationTotalRows={page}
                    paginationRowsPerPageOptions={perPage}
                    defaultSortAsc={false}
                    paginationPerPage={15}
                />
            </div>
            <div className="text-center margin-10">
                <button className="btn btn-success" onClick={() => onSubmit()}>Submit</button>
            </div>

        </div>
    )
}
