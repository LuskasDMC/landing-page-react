import React from "react"

export default (props) => (
    <div id="card" className="p-4 d-flex justify-content-center align-items-center">
        <div>
            <h2 id='card-title' className="text-center font-weight-bold">{props.porcent}</h2>
            <p className="text-center">{props.text}</p>
        </div>
        <div id="footer" style={{backgroundColor:props.color}}/>
    </div>
)