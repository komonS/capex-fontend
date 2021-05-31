import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import ContentHeader from '../widget/ContentHeader'
import { ConfirmContext } from '../../store/ConfirmProvider'
import { Link } from 'react-router-dom'

export default function CapexConfirm() {
    const { confirm, setConfirm } = useContext(ConfirmContext)

    const [title, setTitle] = useState("confirm capex table")
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
            cell: row => <Link to="/capex/view"><button className="btn btn-info">View</button></Link>,
        },
    ])
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
                <button className="btn btn-success">Submit</button>
            </div>
        </div>
    )
}
