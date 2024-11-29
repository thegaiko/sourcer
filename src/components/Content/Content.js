import React, { useRef, useState, useEffect } from 'react';
import './Content.css';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Importing sound icons
import first from './first.mp4';
import second from './second.mp4';
import third from './third.mp4';
import fourth from './fourth.mp4';
import five from './five.mp4';

function Content({ videoSource }) {
  const videoRef = useRef(null); // Video reference
  const [isMuted, setIsMuted] = useState(true); // Sound state

  const toggleMute = () => {
    if (videoRef.current) {
      const currentMutedState = videoRef.current.muted;
      videoRef.current.muted = !currentMutedState; // Toggle sound
      setIsMuted(!currentMutedState); // Update sound state
    }
  };

  // Mapping video sources
  const videoMap = {
    'first.mp4': first,
    'second.mp4': second,
    'third.mp4': third,
    'fourth.mp4': fourth,
    'five.mp4': five
  };

  // Update the video source when the prop changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video when the source changes
    }
  }, [videoSource]);

  return (
    <div className="Content">
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{
            display: 'block',
            width: '100%', // Video stretches to fit the container
            height: '100%', // Video stretches to fit the container
            objectFit: 'cover', // Cover the container without distorting the video
          }}
        >
          <source src={videoMap[videoSource]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Volume toggle button */}
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? <FaVolumeMute size={30} color="white" /> : <FaVolumeUp size={30} color="white" />}
        </button>
      </div>
    </div>
  );
}

export default Content;
