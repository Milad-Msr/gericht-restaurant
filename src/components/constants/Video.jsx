import { useRef, useState } from "react"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

export const Video = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef(null);

  const handleVideo = () => {
    setPlayVideo(playVideo => !playVideo);
    playVideo ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <div className="h-screen relative">
      <video src="./meal.mp4" type="video/mp4" loop controls={false} muted ref={videoRef} className="w-full h-full object-cover" />
      <div className="flex-center absolute inset-0 bg-black/30">
        <div className="flex-center border-2 border-golden p-5 rounded-full cursor-pointer" onClick={handleVideo}>
          {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  )
}