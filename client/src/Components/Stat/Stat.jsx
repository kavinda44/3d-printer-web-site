import React from 'react'
import"./Stat.css"
import CountUp from "react-countup";
const Stat = () => {
  return (
     <section className="mainstatwrap">

<div className="flexCenter">
              <div className="flexColCenter stat1">
                <span>
                  <CountUp start={8800} end={9000} duration={4} /> <span className='plus'>+</span>
                </span>
                <span className="secondaryText">Total Page Views</span>
              </div>

              <div className="flexColCenter stat1">
                <span>
                  <CountUp start={1950} end={2000} duration={4} /> <span className='plus'>+</span> 
                </span>
                <span className="secondaryText">Happy Customer</span>
              </div>

              <div className="flexColCenter stat1">
                <span>
                  <CountUp end={28} /> <span className='plus'>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
              </div>
          </div>
     </section>
  )
}

export default Stat