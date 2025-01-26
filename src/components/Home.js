import React from 'react'
import Logo from './assets/copy1.png'
import './Home.css'

export default function Home() {
  return (
    <div className="main-section col-13">
        <div className="d-flex flex-wrap container col-8"> 
            <div className="pt-5 col-lg-7 col-12 d-lg-none text-center">
                <img src={Logo} alt="Mayush Mehta" width="100%" height="100%" />
            </div>
            <div className="my-5 col-lg-6 col-10 d-lg-block d-none text-center">
                <img src={Logo} alt="Mayush Mehta" width="80%" height="80%" />
            </div>
            <div className="col-lg-6 mt-5 text-center pt-5">
                {/* <h3>Welcome</h3> */}
                <h1 className='text-white name' style={{fontsize: 72}}>
                    Mayush <br /> Kumar Raaz
                </h1>
                <p className="pt-3 title h5">Web Developer, Programmer <br /> UI/UX Designer</p>
                <div className="nav-icon py-3">
                    <a href="https://www.linkedin.com/in/mayush-mehta-343b5521b/" target="_blank" rel="noreferrer" className="p-2">
                        <i className="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/mayushmehta1235?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="p-2 ml-3">
                        <i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/i_m_mayushmehta/" target="_blank" rel="noreferrer" className="p-2 ml-3">
                        <i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/MayuMehta" target="_blank" rel="noreferrer" className="w-5 p-2 ml-3">
                        <i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
  ) 
}
