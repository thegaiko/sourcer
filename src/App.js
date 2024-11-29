import React, { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import './App.css';

function App() {
  const [videoSource, setVideoSource] = useState('first.mp4'); // Default video is first.mp4
  const [loading, setLoading] = useState(true); // Track loading state

  // Function to update the video source
  const changeVideo = (videoName) => {
    setVideoSource(videoName);
  };

  // Simulate loading by using useEffect to delay hiding the loader
  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader"></div> // Display loading screen
      ) : (
        <>
          <Menu onSelectVideo={changeVideo} />
          <Content videoSource={videoSource} />
        </>
      )}
    </div>
  );
}

export default App;
