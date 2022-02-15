import React from 'react'

const Add = () => {
  return (
    <>
    
        <section className='ui-wrapper-mini'>

            <div className="mrgt2">

                <div className="ui-dashboard-card">

                    <div className="ui-dashboard-card-body">

                        <p className="font-matterbold fs-30">

                        </p>

                        <div className="container">

                            <form onSubmit={(e) => e.preventDefault()} className="form">

                                <div className="form-group">

                                    <div className="form-row">

                                        <div className="col">
                                            <label className="fs-13 brandcc-purple font-mattermedium mrgb0">First Name</label>
                                            <input 
                                            type="text" placeholder="John" className="form-control lg font-matter" />
                                        </div>

                                        <div className="col">
                                            <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Last Name</label>
                                            <input
                                            type="text" placeholder="Doe" className="form-control lg font-matter" />
                                        </div>

                                    </div>

                                </div>

                                <div className="form-group">
                                    <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Bio</label>
                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                </div>
                                
                                <div className="form-group">
                                    <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Professional Summary</label>
                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                </div>
                                
                                <div className="form-group">
                                    <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Technical Skills</label>
                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                </div>
                                
                                <div className="form-group">
                                    <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Achievements</label>
                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                </div>

                                <div className="form-group">

                                    <div className="form-row">

                                        <div className="col">
                                            <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Contact</label>
                                            <input 
                                            type="tel" placeholder="" className="form-control lg font-matter" />
                                        </div>

                                        <div className="col">
                                            <div className="custom-file">
                                                <input type="file" className="form-control custom-file-input lg font-matter" />
                                                <label className="custom-file-label fs-13 brandcc-purple font-mattermedium mrgb0">Choose file</label>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    
    </>
  )
}

export default Add