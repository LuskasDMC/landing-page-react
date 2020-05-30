import React from "react"
import data from './data.json'

import Card from '../Cards/Card'

export default (props) => (
    <>
        <div id='block-2' className="row justify-content-center align-items-center mr-0">
            <div className='col-12'>
                <h3 class="text-center text-white font-weight-bold">Bolsas e pontuações</h3>
                <p class="text-center text-white">Todas as bolsas serão concedidas durente todo o curso.</p>
            </div>
            <div className="col-7">
                <div className="row">
                    {data.map(el=>(
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pt-2">
                            <Card
                                text={el.text}
                                color={el.color}
                                porcent={el.porcent}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <img id='purpleWave-image' src='images/purpleWave.svg'/>
    </>
)