import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const VideoModal = ({ videoId = "dQw4w9WgXcQ" }) => {
  return (
    <Dialog.Root>
      {/* FIXED: Changed from a react-router Link to a plain button element 
          to prevent URL hash (#) or theme routing click interference */}
      <Dialog.Trigger asChild>
        <button
          className="video-play-button with-text mt-20"
          style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); // Stops template jQuery scripts from blocking the event
          }}
        >
          <div className="effect"></div>
          <span>
            <i className="fa-solid fa-play"></i> OUR STORY
          </span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Background Overlay Blur Class */}
        <Dialog.Overlay className="yt-modal-overlay" />

        {/* Centered Content Container Class */}
        <Dialog.Content className="yt-modal-content">
          <Dialog.Title style={{ display: "none" }}>Video Player</Dialog.Title>
          <Dialog.Description style={{ display: "none" }}>
            Playing YouTube video documentation modal.
          </Dialog.Description>

          {/* Embedded YouTube Frame with fixed URL syntax */}
          <iframe
            className="yt-modal-iframe"
            src={`https://youtube.com{videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Close Button Class */}
          <Dialog.Close asChild>
            <button className="yt-modal-close-btn" aria-label="Close">
              &times;
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoModal;
