import React, { useEffect, useRef } from "react";
import "./App.css";
import Draggable from "react-draggable";


function App() {
  const userVideo = useRef();
  const partnerVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
        if (partnerVideo.current) {
          partnerVideo.current.srcObject = stream;
        }
      });
  }, []);

  return (
    <>
      <video id="remote-video" playsinline ref={partnerVideo} autoPlay />
      <div id="moveable">
        <Draggable>
          <video id="local-video" playsInline muted ref={userVideo} autoPlay />
        </Draggable>
      </div>
      <div className="multi-button">
        <div className="buttonContainer">
          <button className="hoverButton" onclick="{muteMicrophone()}">
            <i id="mic-icon" className="fas fa-microphone fa-xs"></i>
          </button>
          <div className="HoverState" id="mic-text">
            Mute
          </div>
        </div>

        <div className="buttonContainer">
          <button className="hoverButton" onclick="{pauseVideo()}">
            <i className="fas fa-video fa-xs" id="video-icon"></i>
          </button>
          <div className="HoverState" id="video-text">
            Pause Video
          </div>
        </div>

        <div className="buttonContainer">
          <button className="hoverButton" id="share-button" onclick="{swap()}">
            <i id="swap-icon" className="fas fa-desktop fa-xs"></i>
          </button>
          <div className="HoverState" id="swap-text">
            Share Screen
          </div>
        </div>

        <div className="buttonContainer">
          <button className="hoverButton" onclick="{toggleChat()}">
            <i id="chat-icon" className="fas fa-comment fa-xs"></i>
          </button>
          <div className="HoverState" id="chat-text">
            Show Chat
          </div>
        </div>

        <div className="buttonContainer">
          <button
            className="hoverButton"
            id="pip-button"
            onclick="{togglePictureInPicture()}"
          >
            <i className="fas fa-external-link-alt fa-xs"></i>
          </button>
          <div className="HoverState" id="pip-text">
            Toggle Picture in Picture
          </div>
        </div>

        <div className="buttonContainer">
          <button className="hoverButton" onclick="{requestToggleCaptions()}">
            <i className="fas fa-closed-captioning fa-xs"></i>
          </button>
          <div className="HoverState" id="caption-button-text">
            Start Live Caption
          </div>
        </div>

        <div className="buttonContainer">
          <button
            className="hoverButton"
            onclick="{window.location.href = '/newcall'}"
          >
            <i className="fas fa-phone-slash fa-xs"></i>
          </button>
          <div className="HoverState">End Call</div>
        </div>
      </div>
    </>
  );
}

export default App;
