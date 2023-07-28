import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  srr: false,
});

export default Map;
