import { useEffect } from 'react';
import { mapScript } from '../../utils/mapscript';

export default function MapPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      mapScript();
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}
