import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

export default function ItemApproval() {

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
        }
    ])
    const [item, setItem] = useState([

    ])
    return (
        <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
                <h3 className="card-title">Item Approval</h3>
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
                    title="Item capex wating approving"
                    columns={column}
                    data={item}
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
