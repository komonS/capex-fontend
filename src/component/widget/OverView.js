import React from 'react'

export default function OverView() {
    return (
        <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
                <h3 className="card-title">Over View</h3>
                <div className="card-tools">

                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                    </button>

                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                    </button>
                </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
                <div className="box-info">
                    <div className="progress-group">
                        Approved
                        <span className="float-right"><b>10</b></span>
                        <div className="progress progress-sm">
                            <div className="progress-bar bg-success" style={{ width: '80%' }} />
                        </div>
                    </div>
                    <div className="progress-group">
                        Reject
                        <span className="float-right"><b>10</b></span>
                        <div className="progress progress-sm">
                            <div className="progress-bar bg-danger" style={{ width: '60%' }} />
                        </div>
                    </div>
                    <div className="progress-group">
                        Rework
                        <span className="float-right"><b>1</b></span>
                        <div className="progress progress-sm">
                            <div className="progress-bar bg-warning" style={{ width: '5%' }} />
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
