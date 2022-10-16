import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../Contexts/SocketContext';

function Sidebar( { children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div>
        <input label="Name" value={name} onChange={(e) => setName(e.target.value)}  />
        <CopyToClipboard text={me}>
            <button>
                Copy Your ID
            </button>
        </CopyToClipboard>

        <input label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}  />
            {callAccepted && !callEnded ? (
            <button onClick={leaveCall} >
                Hang Up
            </button>
              ) : (
            <button onClick={() => callUser(idToCall)} >
                Call
            </button>
        )}

        <br></br>
        {children}
    </div>
  )
}

export default Sidebar