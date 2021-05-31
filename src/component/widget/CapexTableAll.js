import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { CapexContext } from '../../store/CapexProvider'
export default function CapexTableAll() {
    const { capex, setCapex } = useContext(CapexContext)

    const [title, setTitle] = useState("Capex Table All")
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
        <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
                <h3 className="card-title">Capex Table</h3>
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
            {/* /.card-body */}
            <div className="card-footer">

            </div>
            {/* /.card-footer*/}
        </div>

    )
}
