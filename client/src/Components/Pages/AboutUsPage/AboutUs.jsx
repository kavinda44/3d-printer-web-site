import React from 'react'
import './AboutUs.css'
import kavindaPic from './kavinda.png'
import lahiruPic from './lahiru.png'
import brianPic from './brian.png'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function AboutUs() {
    let message='Meet the visionary team behind Nova, driving innovation and excellence in the 3D printing industry. Our diverse expertise spans IoT, engineering, and design, united by a passion for pushing boundaries and delivering exceptional solutions.';

  return (
   <section className='section-white'>
    <div className='container_abt'>
        <div className='raw_abt'>
            <div  className='col-md-12 text-center'>
                <h2 className='section-title'>
                    THE TEAM BEHIND NOVA
                </h2>
                <p className='section-subtitle'>{message}</p>
                <div className='col-sm-6 col-md-4'>
                    <div className="team-item">
                        <img src={brianPic} className='team-img' alt="pic" />
                        <h3 className='prof_name'>Dominic Brian</h3>
                            <div className="team-info">
                                <p>Head of CEO</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                     <ul className='team-icon'>
                                        <li> <a href="#" className='twitter'>
                                        <FaTwitter />
                                        
                                            </a>  </li>

                                            <li><a href="#" className='instagram'>
                                            <FaInstagram />
                                            </a></li>

                                            <li><a href="#" className='linkedin'>
                                            <FaLinkedin />
                                            </a></li>
                                     </ul>

                            </div>
                    </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                    <div className="team-item">
                        <img src={kavindaPic} className='team-img' alt="pic" />
                        <h3 className='prof_name'>KAVINDA DISSANAYAKE</h3>
                            <div className="team-info">
                                <p>Head of CEO</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                     <ul className='team-icon'>
                                        <li> <a href="#" className='twitter'>
                                        <FaTwitter />
                                        
                                            </a>  </li>

                                            <li><a href="#" className='instagram'>
                                            <FaInstagram />
                                            </a></li>

                                            <li><a href="#" className='linkedin'>
                                            <FaLinkedin />
                                            </a></li>
                                     </ul>

                            </div>
                    </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                    <div className="team-item">
                        <img src={lahiruPic} className='team-img' alt="pic" />
                        <h3 className='prof_name'>Lahiru Rathnayake</h3>
                            <div className="team-info">
                                <p>Head of CEO</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                     <ul className='team-icon'>
                                        <li> <a href="#" className='twitter'>
                                        <FaTwitter />
                                        
                                            </a>  </li>

                                            <li><a href="#" className='instagram'>
                                            <FaInstagram />
                                            </a></li>

                                            <li><a href="#" className='linkedin'>
                                            <FaLinkedin />
                                            </a></li>
                                     </ul>

                            </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
   </section>
   
  )
}

export default AboutUs
