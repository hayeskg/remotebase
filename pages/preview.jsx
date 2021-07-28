import React, { Component } from "react";
import scriptLoader from "react-async-script";

const Preview = ({listingId, isScriptLoaded, isScriptLoadSucceed}) => {
  if (isScriptLoaded && isScriptLoadSucceed) {
    window.AirbnbAPI.bootstrap();
  }

  return (
    <div
      className="airbnb-embed-frame"
      data-id={listingId}
      data-view="home"
      data-hide-price="true"
      style={{ width: '100vw' }}
    />
  );
};

export default scriptLoader(["https://www.airbnb.com/embeddable/airbnb_jssdk"])(
  Preview
);