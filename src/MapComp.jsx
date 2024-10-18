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
  const [cardData, setCardData] = useState(null);
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
      if (targetIconCount < 1) {
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
        setCardData(feature.get("data"));
      });
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <>
      <div className="App">
        <div
          ref={mapElement}
          className="map-container"
          style={{ width: "100%", height: "100%" }}
        ></div>
        <div>{cardData && <Card cardData={cardData} />}</div>
      </div>
    </>
  );
};

export default MapComp;
