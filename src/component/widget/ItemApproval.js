import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import ContentHeader from '../widget/ContentHeader'
import { ConfirmContext } from '../../store/ConfirmProvider'
import { Link } from 'react-router-dom'

export default function ItemApproval() {

    const { confirm, setConfirm } = useContext(ConfirmContext)


    const [title, setTitle] = useState("Job Approval")
    const [page, setPage] = useState(10)
    const [perPage, setPerPage] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const [column, setColumn] = useState([
        {
            name: 'Classification',
            selector: 'classification',
            sortable: true,
        },
        {
            name: 'Priority',
            selector: 'priority',
            sortable: true,
        },
        {
            name: 'Capital Expenditure Item',
            selector: 'capExp',
            sortable: true,
        },
        {
            name: 'Division',
            selector: 'priority',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
        },
        {
            name: 'View',
            sortable: true,
            cell: row => <Link to="/approve/view/1"><button className="btn btn-info">View</button></Link>,
        },
    ])
    const [job, setJob] = useState([])
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
            {/* /.card-body */}
            <div className="card-footer">

            </div>
            {/* /.card-footer*/}
        </div>
    )
}
