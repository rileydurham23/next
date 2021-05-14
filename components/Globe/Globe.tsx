//
// it's **very** heavy component because of three.js in react-globe.gl deps
// please, import it dynamically whenever possible and disable SSR:
//
// import dynamic from "next/dynamic";
// const SSRLessGlob = dynamic(() => import("./Globe"), {
//   ssr: false,
// });
//
import { useEffect, useRef } from "react";
import ReactGlobe, { GlobeProps } from "react-globe.gl";
import earthUrl from "./assets/globe.png";

const USA = { lat: 50, lng: -80 };

export default function Globe(props: GlobeProps) {
  const ref = useRef(null);

  useEffect(() => {
    const globe = ref.current;

    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.3;
      globe.controls().enableZoom = false;
      globe.pointOfView({ ...USA, altitude: 2 });
    }
  }, [ref.current]);

  return (
    <ReactGlobe
      ref={ref}
      globeImageUrl={earthUrl}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere={false}
      enablePointerInteraction={false}
      {...props}
    />
  );
}
