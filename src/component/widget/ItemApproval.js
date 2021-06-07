import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import ContentHeader from '../widget/ContentHeader'
import { ConfirmContext } from '../../store/ConfirmProvider'
import { Link } from 'react-router-dom'
import { UrlContext } from '../../store/UrlProvider'
import axios from 'axios'

export default function ItemApproval() {
    const { flow, url } = useContext(UrlContext)


    const [title, setTitle] = useState("Job Approval")
    const [page, setPage] = useState(10)
    const [perPage, setPerPage] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const [column, setColumn] = useState([
        {
            name: 'Requester',
            selector: 'requester',
            sortable: true,
        },
        {
            name: 'Workflow Name',
            selector: 'workflowName',
            sortable: true,
        },
        {
            name: 'Workflow Step',
            selector: 'workflowStepName',
            sortable: true,
        },
        {
            name: 'View',
            sortable: true,
            cell: row => <Link to="/approve/view/1"><button className="btn btn-info">View</button></Link>,
        },
    ])
    const [job, setJob] = useState([])

    const getJob = async () => {
        let res = await axios.get(flow + "job/job", {
            params: {
                userID: localStorage.userID
            }
        })
        setJob(res.data)
    }

    useEffect(() => {
        getJob()

    }, [])
    return (
        <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
                <h3 className="card-title">Job Approval</h3>
                <div className="card-tools">

                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                    </button>

                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                    </button>
                </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
                <DataTable
                    title={title}
                    columns={column}
                    data={job}
                    pagination
                    className="table table-hover"
                    fixedHeader={true}
                    paginationTotalRows={page}
                    paginationRowsPerPageOptions={perPage}
                    defaultSortAsc={false}
                    paginationPerPage={15}

                />
            </div>
            {/* /.card-body */}
            <div className="card-footer">

            </div>
            {/* /.card-footer*/}
        </div>
    )
}
