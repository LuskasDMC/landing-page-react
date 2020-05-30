import React from 'react'
import Button from '../Buttons/PurpleButton'

export default () => {
    return(
        <header className='row justify-content-between align-items-center pt-sm-4 '>
            <div className="d-flex col-12 col-sm-4 justify-content-center">
                <img src='images/logoUVV.png'  style={{width:'150px',height:"50px"}}/>
            </div>
            <div className="d-flex col-12 col-sm-4 justify-content-center pt-5 pt-sm-0">
                <Button  size="small" text="INSCREVA-SE"/>
            </div>
        </header>
    )
}
