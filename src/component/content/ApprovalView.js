import React from 'react'
import ApprovalItem from '../widget/ApprovalItem'
import ContentHeader from '../widget/ContentHeader'
import ViewItem from '../widget/ViewItem'

export default function ApprovalView() {
    return (
        <div>
            <ContentHeader name="Capex View" />
            <ViewItem />
            <ApprovalItem />
        </div>
    )
}
