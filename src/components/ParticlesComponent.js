import React from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = (props) => {
      return (

            <Particles
                  params={{
                        particles: {
                              color: {
                                    value: "rgb(185, 43, 224)",
                              },
                              links: {
                                    color: "rgb(185, 43, 224)",
                                    distance: 150,
                                    enable: true,
                                    opacity: props.opacity,
                                    width: 1,
                              },
                              collisions: {
                                    enable: true,
                              },
                              move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 4,
                                    straight: false,
                              },
                              number: {
                                    density: {
                                          enable: true,
                                          value_area: 800,
                                    },
                                    value: 90,
                              },
                              opacity: {
                                    value: props.opacity,
                              },
                              shape: {
                                    type: "circle",
                              },
                              size: {
                                    random: true,
                                    value: 3,
                              },
                        },
                        interactivity: {
                              detectsOn: "canvas",
                              events: {

                                    onHover: {
                                          enable: true,
                                          mode: "repulse",
                                    },
                                    resize: true,
                              },
                        },
                  }}
                  style={{
                        minWidth: '100vw',
                        minHeight: '100vh',
                        background: '#fafaf6',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: -1000,
                  }}
            />


      );
}

export default ParticlesComponent;