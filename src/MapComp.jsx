import React, { useRef, useEffect, useState } from "react";
import Card from "./Card";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import "ol/ol.css";
import { storedData } from "./data";
import Pumpkin from "./Pumpkin.svg";
import Target from "./Target.svg";

const MapComp = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const mapElement = useRef();

  useEffect(() => {
    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([
          storedData[0].address[0],
          storedData[0].address[1],
        ]),
        zoom: 16,
      }),
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: Pumpkin,
        scale: 0.2,
      }),
    });

    const iconStyle2 = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: Target,
        scale: 0.3,
      }),
    });

    let targetIconCount = 0;

    const features = storedData.map((data, index) => {
      const marker = new Feature({
        id: `marker${index}`,
        data: data,
        geometry: new Point(fromLonLat([data.address[0], data.address[1]])),
      });
      if (targetIconCount < 3) {
        marker.setStyle(iconStyle2);
        targetIconCount++;
      } else {
        marker.setStyle(iconStyle);
      }
      return marker;
    });

    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    map.on("click", function (e) {
      map.forEachFeatureAtPixel(e.pixel, function (feature) {
        console.log(e);
        console.log(feature.getId());
        console.log(feature);
        console.log(feature.get("data"));

        // Update state with feature data and show the card
        setSelectedFeature(feature.get("data"));
        setIsCardVisible(true);
      });
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          ref={mapElement}
          className="map-container"
          style={{ width: "50%", height: "500px" }}
        ></div>
      </div>
      {isCardVisible && (
        <Card>
          {/* Render feature data inside the card */}
          <div>Feature ID: {selectedFeature.id}</div>
          <div>Feature Data: {selectedFeature.data}</div>
          {/* Add more fields as necessary */}
        </Card>
      )}
    </>
  );
};

export default MapComp;
