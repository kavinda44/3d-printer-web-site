import React from 'react'
import "./About.css"


const About = () => {
  return (
    <section className="flexCenter flexStart servicemain">
        <div className="flexCenter flexStart container">
          <div className="box">
            <div className="content">
              <h2>01</h2>
              <div className="serv">
                <h3>3D PRINTER</h3>
                <p>Adding layers of material to create 3D objects and parts is known as additive manufacturing, and it is done 
with a 3D printer. Another name for it is rapid prototyping.</p>

              </div>
              
              <a href="">read more</a>
            </div>

          </div>


          <div className="box">
            <div className="content">
              <h2>02</h2>
              <div className="serv">
                <h3>3D SCANNER</h3>
                <p>The 3D Scanner is designed to make 3D scanning more accessible and provides consumers with an affordable educational option</p>
              </div>
              
              <a href="">read more</a>
            </div>

          </div>


          <div className="box">
            <div className="content">
              <h2>03</h2>
              <div className="serv">
                <h3>IOT INTEGRATION</h3>
                <p>The IoT-Enabled Integrated 3D Scanning and Printing System represents a novel integration of traditional 
                   3D scanning and printing technology with modern IoT capabilities.</p>

              </div>
              
              <a href="">read more</a>
            </div>

          </div>
        </div>

        {/* <section>
          ede3de
        </section> */}
    </section>
  )
}

export default About