import React, { Fragment } from 'react';
import Anime from 'react-anime';
import ProfileIcon from '../../materials/atom/ProfileIcon/ProfileIcon';
import GenericButton from '../../materials/atom/GenericButton/GenericButton';
import ColorCanvas from '../../materials/atom/ColorCanvas/ColorCanvas';

const Home = () => {
  let nav = '/main'
  return (
    <div className="root" style={{ "height": "100vh", "marginBottom": "100vw", "display": "inline", "position": "fixed" }}>
      <ColorCanvas />
      <div style={{ "position": "absolute", "left": "46%", "top": "20%" }}>
        <ProfileIcon/>
        <GenericButton nav={ nav }/>
      </div>
    </div>
  );
};

export default Home;
