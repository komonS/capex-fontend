import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

export default function CapexTable() {
    const [workflow, setWorkflow] = useState([])
    const [title, setTitle] = useState("Capex Table")
    const [page, setPage] = useState(10)
    const [perPage, setPerPage] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const [column, setColumn] = useState([
        {
            name: 'Capex No.',
            selector: 'capexNo',
            sortable: true,
        },
        {
            name: 'Capex Name',
            selector: 'capexName',
            sortable: true,
        }
    ])
    const [capex, setCapex] = useState([
        {
            capexNo:"B-94",
            capexName:"Test Capex 94"
        },
        {
            capexNo:"B-95",
            capexName:"Test Capex 95"
        },
        {
            capexNo:"B-96",
            capexName:"Test Capex 96"
        },
        {
            capexNo:"B-97",
            capexName:"Test Capex 97"
        },
        {
            capexNo:"B-98",
            capexName:"Test Capex 98"
        }
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
                    title="Capex this year"
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
