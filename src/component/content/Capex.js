import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import ContentHeader from '../widget/ContentHeader'
import { CapexContext } from '../../store/CapexProvider'
import { Link } from 'react-router-dom'
import { ConfirmContext } from '../../store/ConfirmProvider'

export default function Capex() {
    const { capex, setCapex } = useContext(CapexContext)
    const { confirm, setConfirm } = useContext(ConfirmContext)

    const [title, setTitle] = useState("Create capex table")
    const [page, setPage] = useState(10)
    const [perPage, setPerPage] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const [column, setColumn] = useState([
        {
            name: 'Select',
            sortable: true,
            cell: row => <CheckBox data={row} />
            ,
        },
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
            cell: row => <Link to="/capex/view/1"><button className="btn btn-info">View</button></Link>,
        },
    ])

    const onCheckIn = (data) => {
        setConfirm(data)
    }

    const CheckBox = (props) => {
        return (
            <div className="form-group checkbox">
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" onClick={() => onCheckIn(props.data)} />&nbsp;
                    </label>
                </div>
            </div>
        )
    }


    return (
        <div>
            <ContentHeader name="Capex" />
            <div>
                <DataTable
                    title={title}
                    columns={column}
                    data={capex}
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
                <Link to="/capex/confirm">
                    <button className="btn btn-success">Create</button>
                </Link>

            </div>
        </div>
    )
}
