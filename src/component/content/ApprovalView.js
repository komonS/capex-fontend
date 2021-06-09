import React from 'react'
import { useParams } from 'react-router'
import ApprovalItem from '../widget/ApprovalItem'
import ContentHeader from '../widget/ContentHeader'
import ViewItem from '../widget/ViewItem'

export default function ApprovalView() {
    const { flowID } = useParams()
    return (
        <div>
            <ContentHeader name="Capex View" />
            <ViewItem flowID={flowID} />
            <ApprovalItem flowID={flowID} />
        </div>
    )
}
