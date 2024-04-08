import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { OfferType } from '../types/offer';

import useLeafletMap from './hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT } from '../const';

type MapProps = {
  offers: OfferType[];
  selectedOffer: OfferType;
};

const standartIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

export default function MapComponent({offers, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useLeafletMap(mapRef, selectedOffer);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });

        marker
          .setIcon(standartIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}
