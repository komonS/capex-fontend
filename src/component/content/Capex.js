import React, { useContext, useEffect, useState } from 'react'
/* data table component */
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import ContentHeader from '../widget/ContentHeader'
import { CapexContext } from '../../store/CapexProvider'
import { Link } from 'react-router-dom'
import { ConfirmContext } from '../../store/ConfirmProvider'
import { UrlContext } from '../../store/UrlProvider'
import { UserContext } from '../../store/UserProvider'
import axios from 'axios'

export default function Capex() {
    const { user } = useContext(UserContext)
    const { url } = useContext(UrlContext)
    // const { capex, setCapex } = useContext(CapexContext)
    const { confirm, setConfirm, setUnConfirm } = useContext(ConfirmContext)

    const [capex, setCapex] = useState([])

    const [title, setTitle] = useState("Create capex table")
    const [page, setPage] = useState(15)
    const [perPage, setPerPage] = useState([10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    const [column, setColumn] = useState([
        {
            name: 'Select',
            sortable: true,
            cell: row => <CheckBox data={row} />
            ,
        },
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

    const onCheckIn = (data, e) => {
        if (e.target.checked === true) {
            setConfirm(data)
        } else {
            setUnConfirm(data.capexID)
        }

        //setConfirm(data)
    }

    const getData = async () => {
        let res = await axios.get(url + "capex/capex", {
            params: {
                status: "division",
                division: user.devision
            }
        })
        //console.log(res.data)
        setCapex(res.data)
    }

    const CheckBox = (props) => {
        return (
            <div className="form-group checkbox">
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" onChange={(e) => onCheckIn(props.data, e)} />&nbsp;
                    </label>
                </div>
            </div>
        )
    }


    useEffect(() => {
        getData()

    }, [])


    return (
        <div>
            <ContentHeader name="Capex" />
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
            <div className="text-center margin-10">
                <Link to="/capex/confirm">
                    <button className="btn btn-success">Create</button>
                </Link>

            </div>
        </div>
    )
}
