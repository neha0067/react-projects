import React from 'react';
import { useGlobalContext } from '../context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section onMouseOver={closeSubmenu}>
        <h1> Manage Any Content <br/> Anywhere </h1>
        <p>Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.</p>
    </section>
  );
};

export default Hero;
