import React from 'react'

const Details = () => {
    return (
        <>
        
            <section className='section ui-wrapper-mini'>

                <div className="ui-dashboard-card mrgt1">

                    <div className="ui-dashboard-card-body">

                        <div className="container">

                            <div className="row">

                                <div className='col'>
                                    <p className='font-matterlight fs-14 mrgb0' style={{color: '#3A4865'}}>First Name</p>
                                    <p className='font-matter fs-16 onblack mb-1 mt-2'>John</p>
                                    <div className="ui-line" style={{ backgroundColor: '#D5DEEF'}}></div>
                                </div>
                                
                                <div className='col'>
                                    <p className='font-matterlight fs-14 mrgb0' style={{color: '#3A4865'}}>Last Name</p>
                                    <p className='font-matter fs-16 onblack mb-1 mt-2'>Doe</p>
                                    <div className="ui-line" style={{ backgroundColor: '#D5DEEF'}}></div>
                                </div>
                                
                                <div className='col'>
                                    <p className='font-matterlight fs-14 mrgb0' style={{color: '#3A4865'}}>Email</p>
                                    <p className='font-matter fs-16 onblack mb-1 mt-2'>john@gmail.com</p>
                                    <div className="ui-line" style={{ backgroundColor: '#D5DEEF'}}></div>
                                </div>

                            </div>

                            <div className="row mrgt1 mrgb2">

                                <div className='col-4'>
                                    <p className='font-matterlight fs-14 mrgb0' style={{color: '#3A4865'}}>Course</p>
                                    <p className='font-matter fs-16 onblack mb-1 mt-2'>Data structure</p>
                                    <div className="ui-line" style={{ backgroundColor: '#D5DEEF'}}></div>
                                </div>

                            </div>

                        </div>

                        <div className="details_box md" style={{ backgroundColor: '#F8FAFE' }}>

                            <div className="container">

                                <div className="row">

                                    <div className="col">

                                        <p className='font-matterlight fs-14 mrgb0' style={{color: '#3A4865'}}>Course Details: Data Structure </p> 
                                        <p className='font-matterregular fs-14 onblack'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusantium vitae voluptatibus soluta et nulla pariatur maxime id unde aliquam corporis magni dignissimos earum aperiam error, animi dolorum esse. Vel!
                                            Eum quo, neque alias eius dolorem similique quam necessitatibus perferendis rem eveniet sapiente perspiciatis nostrum minima ad voluptatem fugit odit. Officiis ea magnam reiciendis. Possimus voluptates ea repellat porro non.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Details