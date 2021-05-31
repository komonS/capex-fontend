import React from 'react'

export default function TotalInvestment() {
    return (
        <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
                <h3 className="card-title">Total Investment Amount This Year</h3>
                <div className="card-tools">

                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                    </button>

                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                    </button>
                </div>
            </div>
            {/* /.card-header */}
            <div className="card-body" style={{padding:10}}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <lable>1st Half Plan</lable>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <lable>2nd Half Plan</lable>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <lable>Full Plan Year</lable>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">

            </div>
            {/* /.card-footer*/}
        </div>
    )
}
