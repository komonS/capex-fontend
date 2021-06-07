import React, { useState } from 'react'
import { useParams } from 'react-router'
import ContentHeader from '../widget/ContentHeader'
import ViewItem from '../widget/ViewItem'

export default function CapexView() {
    const { capexID } = useParams()
    return (
        <div>
            <ContentHeader name="Capex View" />
            <ViewItem capexID={capexID} />
        </div>
    )
}
