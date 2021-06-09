import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
/* data table component */
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Link } from 'react-router-dom';
import { UrlContext } from '../../store/UrlProvider';
import { UserContext } from '../../store/UserProvider'
export default function Flow() {
    const { user } = useContext(UserContext)
    const { url, flow } = useContext(UrlContext)
    const [capex, setCapex] = useState([])

    const [title, setTitle] = useState("Create capex table")
    const [page, setPage] = useState(15)
    const [perPage, setPerPage] = useState([10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100])
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
            selector: 'flowStatus',
            sortable: true,
        },
        {
            name: 'View',
            sortable: true,
            cell: row => <Link to={"/capex/edit/" + row.capexID + "/" + row.flowID}><button className="btn btn-info">View</button></Link>,
        },
    ])

    const getData = async () => {
        let res = await axios.get(url + "capexflow/capexflow", {
            params: {
                status: "division",
                division: user.devision
            }
        })
        //console.log(res.data)
        setCapex(res.data)
    }

    useEffect(() => {
        getData()

    }, [])
    return (
        <div>
            <DataTableExtensions
                columns={column}
                data={capex}
                export={false}
                print={false}
                filterPlaceholder="search"

            >
                <DataTable
                    highlightOnHover
                    noHeader
                    className="table table-hover"
                    fixedHeader={true}
                    pagination={true}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={perPage}
                />
            </DataTableExtensions>
        </div>
    )
}
