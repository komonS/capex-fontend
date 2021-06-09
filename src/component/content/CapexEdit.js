import React from 'react'
import { useParams } from 'react-router'
import ContentHeader from '../widget/ContentHeader'
import EditItem from '../widget/EditItem'

export default function CapexEdit() {
    const { capexID, flowID } = useParams()
    return (
        <div>
            <ContentHeader name="Capex Edit" />
            <EditItem capexID={capexID} flowID={flowID} />
        </div>
    )
}
