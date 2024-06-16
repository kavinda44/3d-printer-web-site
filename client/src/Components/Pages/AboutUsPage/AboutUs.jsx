import React from "react";

import "./AboutUs.css";
import kavindaPic from "./kavinda.png";
import lahiruPic from "./lahiru.png";
import brianPic from "./brian.png";
import TeamItem from "./TeamItem";

function AboutUs() {
  let message =
    "Meet the visionary team behind Nova, driving innovation and excellence in the 3D printing industry. Our diverse expertise spans IoT, engineering, and design, united by a passion for pushing boundaries and delivering exceptional solutions.";
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
      memberImage: kavindaPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Chanuka Wijesooriya",
      memberImage: kavindaPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Resandu Udagedara",
      memberImage: kavindaPic,
      memberTitle: "CEO",
      memberDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      memberName: "Shehan Bandara",
      memberImage: kavindaPic,
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
