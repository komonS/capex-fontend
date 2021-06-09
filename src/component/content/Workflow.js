import React from 'react'
import ContentHeader from '../widget/ContentHeader'
import Flow from '../widget/Flow'
import WorkflowTable from '../widget/WorkflowTable'

export default function Workflow() {
    return (
        <div>
            <ContentHeader name="Workflow" />
            <div>
                <Flow />
            </div>
        </div>
    )
}
