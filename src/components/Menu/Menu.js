import React, { useState } from 'react';
import logo from './logo.svg';
import toch from './toch.svg';
import './Menu.css';

function Menu({ onSelectVideo }) {
  // Set 'first' as the default active item to make "Strategy + R&D" visible initially
  const [activeItem, setActiveItem] = useState('first');

  // Descriptions for each menu item
  const descriptions = {
    'first': 'We are essential for forward-thinking enterprises, where strategies shape goals, and R&D drives innovation by exploring new technologies and methodologies.',
    'second': 'We guide the visual and conceptual aspects of projects, ensuring cohesive messaging and emotional resonance.',
    'third': 'We balance aesthetics and functionality, while design systems maintain consistency and scalability across platforms.',
    'fourth': 'We manage all aspects of project realization, from planning and logistics to execution and post-production.',
    'fifth': 'We merge physical and digital realms to offer immersive and interactive experiences, reshaping how audiences engage with content and surroundings.'
  };

  // Handle item click
  const handleItemClick = (item) => {
    if (activeItem === item) {
      setActiveItem(null);  // Hide description if the same item is clicked again
    } else {
      setActiveItem(item);  // Set the active item to show its description
    }

    // Optionally, you can trigger the video selection as well
    onSelectVideo(`${item}.mp4`);
  };

  return (
    <div className='Menu'>
      <div className="mainMenu">
        <div className='header'>
          <img className='logo' src={logo} alt="Logo" />
          <div className='menuText'>Menu</div>
        </div>
        <div className='boldText' onClick={() => handleItemClick('first')}>Strategy + R&D</div>
        <div className={`text ${activeItem === 'first' ? 'visible' : ''}`}>
          {activeItem === 'first' && descriptions.first}
        </div>

        <div className='bar'>
          <div className='barText' onClick={() => handleItemClick('second')}>Creative Direction</div>
          <div className={`text ${activeItem === 'second' ? 'visible' : ''}`}>
            {activeItem === 'second' && descriptions.second}
          </div>

          <div className='barText' onClick={() => handleItemClick('third')}>Full-Service Production</div>
          <div className={`text ${activeItem === 'third' ? 'visible' : ''}`}>
            {activeItem === 'third' && descriptions.third}
          </div>

          <div className='barText' onClick={() => handleItemClick('fourth')}>Animation + VFX</div>
          <div className={`text ${activeItem === 'fourth' ? 'visible' : ''}`}>
            {activeItem === 'fourth' && descriptions.fourth}
          </div>

          <div className='barText' onClick={() => handleItemClick('five')}>AR + XR Experiences</div>
          <div className={`text ${activeItem === 'five' ? 'visible' : ''}`}>
            {activeItem === 'five' && descriptions.fifth}
          </div>
        </div>
      </div>
      <div className='miniMenuBar'>Projects</div>
      <div className='miniMenuBar'>Our Team</div>
      <div className='tochMenuBar'>
        <div>Get in touch</div>
        <img className='toch' src={toch} alt="Logo" />
      </div>
    </div>
  );
}

export default Menu;
