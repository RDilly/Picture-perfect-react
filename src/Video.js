import React from "react";
import "./face-api.min.js";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.streamCamVideo = this.streamCamVideo.bind(this);
  }
  streamCamVideo() {
    var constraints = { audio: true, video: { width: 720, height: 560 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

  render() {
    return (
      <div>
        <div id="container">
          <video autoplay muted id="videoElement">
            {this.streamCamVideo()}
          </video>
        </div>
      </div>
    );
  }
}

export default Video;
