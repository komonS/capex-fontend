import React from 'react'

export default function ApprovalItem() {
    return (
        <div className="row box-capex-view">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <div className="forn-group">
                    <label>Comment : </label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <div className='form-group'>
                    <label>select choice : </label>
                    <select className="form-control" >
                        <option value=""> -- SELECT -- </option>
                        <option value="approve"> Approve </option>
                        <option value="reject"> Reject </option>
                        <option value="rework"> Rework </option>
                    </select>
                </div>
                <div className="text-center">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
            <div className="col-md-3">

            </div>

        </div>
    )
}
