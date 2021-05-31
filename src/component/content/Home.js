import React from 'react'
import '../../css/Home.css'
//import BoxInfo from '../widget/BoxInfo'
import BoxinfoWorkflow from '../widget/BoxinfoFlow'
import CapexTable from '../widget/CapexTable'
import ContentHeader from '../widget/ContentHeader'
import ItemApproval from '../widget/ItemApproval'
import OverView from '../widget/OverView'
import TotalInvestment from '../widget/TotalInvestment'
import WorkflowTable from '../widget/WorkflowTable'

export default function Home() {
    return (
        <div className="home ">
            <div className="container-fluid">
                <ContentHeader name="Dashboard" />

                <div className="row">
                    <div className="col-md-7">
                        <TotalInvestment />
                        <OverView />
                    </div>
                    <div className="col-md-5">
                        <CapexTable />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ItemApproval />
                    </div>
                </div>
            </div>


        </div>
    )
}
