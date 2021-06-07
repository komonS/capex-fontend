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
            name: 'View',
            sortable: true,
            cell: row => <Link to={"/capex/view/" + row.capexID}><button className="btn btn-info">View</button></Link>,
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
                    columns={column}
                    data={capex}
                    highlightOnHover
                    noHeader
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
