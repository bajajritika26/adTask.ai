import React from 'react'
import video from "../assets/video.png"
import message from "../assets/message.png"
const VideoSection = () => {
  return (

        <div className="position-relative " >
        <img src={video} alt='' className='' style={{width:"65vw"}} />

    <div class="position-absolute end-0 bottom-50 me-3 mb-3  ">
    <img src={message} alt='' className=' ' />
       
    </div>
</div>
    
  )
}

export default VideoSection