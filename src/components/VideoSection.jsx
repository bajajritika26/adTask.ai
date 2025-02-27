import React, { useState } from 'react'
import video from "../assets/video.png"
import message from "../assets/message.png"
import ChatBot from '../pages/ChatBot';
const VideoSection = () => {
  const [showChat, setShowChat] = useState(false);
  return (

        <div className="position-relative " >
        <img src={video} alt='' className='' style={{width:"65vw"}} />

    
        <img src={message} alt='' className='position-fixed cursor-pointer' style={{ bottom: "30px", right: "30px", width: "60px", height: "60px", zIndex: 1000 }} onClick={()=>setShowChat(true)} />
        {showChat && <ChatBot onClose={() => setShowChat(false)} />}

     
</div>
    
  )
}

export default VideoSection