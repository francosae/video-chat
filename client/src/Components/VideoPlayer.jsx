import React, { useContext } from 'react'
import { SocketContext } from '../Contexts/SocketContext';

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <div>
    {stream && (
        <video playsInline muted ref={myVideo} autoPlay />
      )}
      {callAccepted && !callEnded && (
        <video playsInline ref={userVideo} autoPlay />
      )}
    </div>
  )
}

export default VideoPlayer