import React from "react"
import Header from '../Header/DefaultHeader'
import Section from '../Sections/Section1'
export default (props) => {

    return(
        <div id='block-1' className='row justify-content-center  ml-0'>
          <img id="background-image" className='img-fluid' src='images/bg.png'/>
          <img id="mountain-image" className='img-fluid' src='images/mountain.svg'/>
          <div id='sub-block1' className="col-7">
            <Header/>
            <div id='sub-block-text' className='col-12 col-lg-6'>
              <Section/>
            </div>
          </div>
        </div>
    )
}
