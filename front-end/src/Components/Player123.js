import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { IconContext } from "react-icons";
const Player = () => {
  let location = useLocation();
  const soundUrl = location.state.src;
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });
  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(`${soundUrl}`);
  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="borderHoju1">
      <div className="component12">
        <h2 className='title12'>Playing Now</h2>
        {
          location.state.imgL ?
            <div className='veryhelper'>
              <img className="imagur12" src={location.state.imgL} /></div>
            : <img className="imagur123" src="https://picsum.photos/200/200" />
        }
        <div>
          <p style={{ "marginTop": "20px", "fontSize": "20px", "color": "white", "height": "50px", "textTransform": "capitalize" }}>{location.state.title}</p>
        </div>
        <div>
          <div className="time">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="timeline"
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
        <div>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
        </div>
        <br></br>
        <Link to="/Home" style={{ "color": "black", "textDecoration": "none", padding:'15px' ,backgroundColor: '#1ed760',border:'none',height:'8%',width:'30%'}} >Go to Songs</Link>
      </div>
    </div>
  );

}

export default Player;