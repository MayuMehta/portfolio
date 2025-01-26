import React from 'react'
import './Education.css'

export default function Education() {
  return (
    <section className="education py-5" id='education'>
          <div className='container colo-13'>
            <h1 className='text-center'>Education</h1>
            <ul className='pt-3'>
              <li className='d-flex flex-wrap col-12 pt-3'>
                <div className='col-md-6 ml-auto'>
                  <h4>GD Goenka University Gurgaon</h4>MCA <br />8.58 CGPA
                </div>
                <div className='col-5'>
                  <h5>2022-2024</h5>
                </div>
              </li>
              <li className='d-flex flex-wrap col-12 pt-3'>
                <div className='col-md-6 ml-auto'>
                  <h4>Tilkamanjhi Bhagalpur University Bhagalpur Bihar</h4>BCA <br />74.14%
                </div>
                <div className='col-5'>
                  <h5>2017-2020</h5>
                </div>
              </li>
              <li className='d-flex flex-wrap col-12 pt-3'>
                <div className='col-md-6 ml-auto'>
                  <h4>New Horizon School Simaria Bhagalpur</h4>Intermediate<br />57%
                </div>
                <div className='col-5'>
                  <h5>2015-2017</h5>
                </div>
              </li>
              <li className='d-flex flex-wrap col-12 pt-3'>
                <div className='col-md-6 ml-auto'>
                  <h4>PMHS Harda Purnia </h4>Matric <br />70%
                </div>
                <div className='col-5'>
                  <h5>2014-2015</h5>
                </div>
              </li> 
            </ul>
          </div>
    </section>
  )
}
