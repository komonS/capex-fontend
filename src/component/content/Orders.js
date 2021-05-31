import React from 'react'
import CapexTableAll from '../widget/CapexTableAll'
import ContentHeader from '../widget/ContentHeader'
import InputCapex from '../widget/InputCapex'

export default function Orders() {
    return (
        <div>
            <ContentHeader name="Capex Input" />

            <InputCapex />
            <CapexTableAll />
        </div>
    )
}
