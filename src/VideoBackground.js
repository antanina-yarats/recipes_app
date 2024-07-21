import React, {useEffect, useRef} from 'react';

const VideoBackground = () => {

  const videoRef = useRef(null);

  useEffect(()=> {
    if(videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  })

  return (
    <video muted loop autoPlay className="background-video">
      <source src='https://cdn.glitch.global/d428b9ff-55a8-43e4-9056-294c40bb0592/5866122-uhd_2560_1440_25fps.mp4?v=1719046042785' type="video/mp4"/>
    </video>
  )
}

export default VideoBackground;