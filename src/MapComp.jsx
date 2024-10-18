import React, { useRef, useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
// import Style from 'ol/style/Style';
// import Icon from 'ol/style/Icon';
import 'ol/ol.css';

const OLMap = () => {
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
        center: fromLonLat([-1.898575, 52.489471]),
        zoom: 12,
      }),
    });


    const marker = new Feature({
      geometry: new Point(fromLonLat([-1.898575, 52.489471])),
    });

    const marker2 = new Feature({
      geometry: new Point(fromLonLat([-1.899, 52.49])),
    });


    const vectorSource = new VectorSource({
      features: [marker, marker2],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);


    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div>
      <div ref={mapElement} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default OLMap;
