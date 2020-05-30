import React from "react"

export default (props) => (
    <div id="card" className='d-flex align-items-center '>
            <p id='card-title' className="text-center">{props.porcent}</p>
            <p className="text-center">{props.text}</p>
        <div id="footer" style={{backgroundColor:props.color}}/>
    </div>
)