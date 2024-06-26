import React from "react";

import "./AboutUs.css";
import kavindaPic from "./kavinda.png";
import lahiruPic from "./lahiru.png";
import brianPic from "./brian.png";
import shehanPic from "./shehan.png";
import resanduPic from "./resandu.png";
import chanukaPic from "./chanuka.png"; 
import kanchanaPic from "./kanchana.png"; 
import TeamItem from "./TeamItem";


function AboutUs() {
  let message =
    "Meet the visionary team behind Nova, a pioneering force in the 3D printing industry. Our team is dedicated to driving innovation and excellence, leveraging cutting-edge technology and creative design to push the boundaries of what's possible. With expertise spanning IoT, engineering, and design, we bring a unique blend of skills and knowledge to every project.";
  const teamMembers = [
    {
      memberName: "Geeneth Madagedara",
      memberImage: kavindaPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Chanuka Wanigasekara",
      memberImage:  chanukaPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Chanuka Wijesooriya",
      memberImage:  kanchanaPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Resandu Udagedara",
      memberImage: resanduPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Shehan Bandara",
      memberImage: shehanPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Kavinda Dissanayake",
      memberImage: kavindaPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Dominic Brian",
      memberImage: brianPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Lahiru Rathnayake",
      memberImage: lahiruPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="section-white">
      <div className="raw_abt">
        <h2 className="section-title">THE TEAM BEHIND NOVA</h2>
        <p className="section-subtitle">{message}</p>
        <div className="team-item-container">
          {teamMembers.map(
            ({ memberName, memberImage, memberTitle, memberDesc }, index) => (
              <TeamItem
                key={index}
                memberName={memberName}
                memberImage={memberImage}
                memberTitle={memberTitle}
                memberDesc={memberDesc}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
