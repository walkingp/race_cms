import React from "react";
import {
  Map,
  APILoader,
  ScaleControl,
  ToolBarControl,
  ControlBarControl,
  Geolocation,
} from "@uiw/react-amap";

interface Props {}

export const MapPage = (props: Props) => {
  return (
    <APILoader akay="b86e95d7214c2ecd5f2e06ae07682bb3">
      <div style={{ width: "100%", height: "calc(100vh - 160px)" }}>
        <Map>
          <ScaleControl offset={[16, 30]} position="LB" />
          <ToolBarControl offset={[16, 10]} position="RB" />
          <ControlBarControl offset={[16, 180]} position="RB" />
          <Geolocation
            maximumAge={100000}
            borderRadius="5px"
            position="RB"
            offset={[16, 80]}
            zoomToAccuracy={true}
            showCircle={true}
          />
        </Map>
      </div>
    </APILoader>
  );
};
