import dynamic from "next/dynamic";

const MapT = dynamic(() => import('./Map'), {
    ssr: false
});

export default MapT