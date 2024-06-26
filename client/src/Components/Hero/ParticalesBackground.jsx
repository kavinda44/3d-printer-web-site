import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const ParticalesBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);
        console.log("this is called twice")
        await loadFull(main);
      };

  return (
    
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{ 
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": true,
              "value_area": 2000
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "./IMG_5250.JPG",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3.2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        background: {
          color: '#000000', // Set the background color to black
          image: '',
          position: '',
          repeat: '',
          size: '',
          
        },
       
        retina_detect: true,
        parallax: {
          enable: true,
          force: 2,
        },
      }}
    />
  )
}

export default ParticalesBackground