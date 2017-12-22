import React, { Fragment } from 'react';
import Anime from 'react-anime';
import GenericButton from '../../materials/atom/GenericButton/GenericButton';
import ColorCanvas from '../../materials/atom/ColorCanvas/ColorCanvas';

const Home = () => {
  return (
    <div className="root" style={{ "height": "100vh", "marginBottom": "100vw", "display": "inline", "position": "fixed" }}>
      <ColorCanvas />
      <div style={{ "position": "absolute", "left": "46%", "top": "48%" }}>
        <GenericButton/>
      </div>
    </div>
  );
};

export default Home;
