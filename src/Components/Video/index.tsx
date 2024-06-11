// #region Global Imports
import React from "react";
import { useRef, useState } from "react";

export const Video: React.FunctionComponent<any> = ({ source }) => {
  const videoRef = useRef(null);

  return (
    <>
      <video ref={videoRef} width="100%" height="100%" controls>
        <source src={source} type="video/mp4" />
      </video>
    </>
  );
};
