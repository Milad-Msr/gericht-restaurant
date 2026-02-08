import "./Intro.css";
import { meal } from "../constants";
import { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const Intro = () => {
  const vidRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo(playVideo => !playVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <div className="app__video">
      <video src={meal} ref={vidRef} type="video/mp4" controls={false} loop muted />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          {playVideo 
            ? <BsPauseFill color="#FFF" fontSize={30} />
            : <BsFillPlayFill color="#FFF" fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
}