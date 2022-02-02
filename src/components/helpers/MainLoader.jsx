import React from 'react';

const MainLoader = () => {

    return (
        <div>
            <div className="suspense bg-black">

                <div className="suspense_image ui-text-center">
                
                    <span className='saidatech-loader white md onwhite'></span>
                    <p className="onwhite font-mattersemibold fs-25">SAIDATECH</p>
                </div>

            </div>
        </div>
    )

}

const popNetwork = () => {

    window.location.href = '/no-network'

}

export default { MainLoader, popNetwork };