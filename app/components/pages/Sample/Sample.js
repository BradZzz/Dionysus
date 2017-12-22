import React from 'react';
import Anime from 'react-anime';
import SubmitButton from '../../materials/atom/SubmitButton/SubmitButton';
import VortexAnimation from '../../materials/atom/VortexAnimation/VortexAnimation';
import FireworksAnimation from '../../materials/atom/FireworksAnimation/FireworksAnimation';
import LogoAnimation from '../../materials/atom/LogoAnimation/LogoAnimation';
import CandySpiral from '../../materials/atom/CandySpiral/CandySpiral';
import ColorCanvas from '../../materials/atom/ColorCanvas/ColorCanvas';

const Sample = () => {
  return (
    <div>
      <h2 id="heading">ReactJS Animation Tests</h2>
      <div style={{ "display": "flex", "flexDirection":"column" }}>
        <div className="root" style={{ "height": "150px", "width": "18%", "margin": "0 auto" }}>
          <Anime easing="easeOutElastic" loop={!false} duration={1000} direction="alternate" delay={(el, index) => index * 240} translateX="13rem" scale={[0.75, 0.9]}>
            <div className="anime-ball blue" />
            <div className="anime-ball green" />
            <div className="anime-ball red" />
          </Anime>
        </div>
        <div className="root" style={{ "height": "100px", "marginBottom": "150px" }}>
          <SubmitButton />
        </div>
        <div className="root" style={{ "height": "100px", "marginBottom": "150px" }}>
          <VortexAnimation />
        </div>
        <div className="root" style={{ "height": "300px", "marginBottom": "150px" }}>
          <CandySpiral />
        </div>
        <div className="root" style={{ "height": "600px", "marginBottom": "150px" }}>
          <ColorCanvas />
        </div>
        <div className="root" style={{ "height": "400px", "marginBottom": "150px" }}>
          <LogoAnimation />
        </div>
        <div className="root" style={{ "height": "100px", "marginBottom": "150px" }}>
          <FireworksAnimation />
        </div>
      </div>
    </div>
  );
};

export default Sample;
