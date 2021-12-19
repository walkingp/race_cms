import React from "react";
import ReactPlayer from "react-player";

interface Props {}

export const Player = (props: Props) => {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};
