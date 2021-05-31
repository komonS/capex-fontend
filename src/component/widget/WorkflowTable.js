import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { UrlContext } from '../../store/UrlProvider'
export default function WorkflowTable() {
    const { flow } = useContext(UrlContext)
    const [workflow, setWorkflow] = useState([])
    const [title, setTitle] = useState("Workflow Table")
    const [page, setPage] = useState(10)
    const [perPage, setPerPage] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const [column, setColumn] = useState([
        {
            name: 'Workflow ID',
            selector: 'workflowID',
            sortable: true,
        },
        {
            name: 'Workflow Name',
            selector: 'workflowName',
            sortable: true,
        },
        {
            name: 'Owner',
            selector: 'owner',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'workflowStatusName',
            sortable: true,
        },
        {
            name: 'Option',
            sortable: true,
            cell: row => <Link to={"/workflow/detail/" + row.workflowID}><button className="btn btn-info">View</button></Link>
        },
    ])

    const getWorkflow = async () => {
        let res = await axios.get(flow+"workflow/workflow")
        setWorkflow(res.data)
    }

    useEffect(() => {
        getWorkflow()
        
    }, [])
    return (
        <div className="card">
            <div className="card-header border-transparent">
                <h3 className="card-title"><b>Workflow List</b></h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times" />
                    </button>
                </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
                <div className="table-responsive">
                    <DataTable
                        title={title}
                        columns={column}
                        data={workflow}
                        pagination
                        className="table table-hover"
                        fixedHeader={true}
                        paginationTotalRows={page}
                        paginationRowsPerPageOptions={perPage}
                        defaultSortAsc={false}
                        paginationPerPage={15}

                    />
                    {/* <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Workflow Name</th>
                                <th>Owner</th>
                                <th>Status</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Test Workflow</td>
                                <td>
                                    Komon
                                </td>
                                <td>
                                    Active
                                </td>
                                <td>
                                    <button className="btn btn-info">View</button>
                                </td>
                            </tr>
                        </tbody>
    </table> */}
                </div>
                {/* /.table-responsive */}

            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">

            </div>
            {/* /.card-footer */}
        </div>

    )
}
