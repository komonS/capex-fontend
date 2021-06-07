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
        let sd = moment().format("YYYY-MM-DD")
        let ed = moment().add(30, 'd').format("YYYY-MM-DD")
        let res = await axios.post(flow + "flow/create", {
            workflowID: 4003,
            start: sd,
            end: ed,
            requester: localStorage.userID
        })
        console.log("create flow")
        console.log(res.data)
        if (res.data.status === "success") {
            let res2 = await axios.post(flow + "approval/create", {
                flowID: res.data.flowID,
                approval: approval
            })
            console.log("create approval")
            console.log(res2.data)
            if (res2.data.status === "success") {
                let res3 = await axios.post(flow + "flow/startflow", {
                    flowID: res.data.flowID
                })
                console.log("start flow")
                console.log(res3.data)
                if (res3.data.status === "success") {
                    clearConfirm()
                    alert("create flow and approval complated, please checking in workflow")
                } else {
                    alert(res3.data.detail)
                }
            } else {
                alert(res2.data.detail)
            }
        } else {
            alert(res.data.detail)
        }
        //console.log(sd + " : " + ed)
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
