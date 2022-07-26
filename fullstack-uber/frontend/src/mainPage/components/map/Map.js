import { useRef, useEffect,useState } from "react";

export const Map = ({center, zoom}) => {
    const ref = useRef(null);
    const [map, setMap] = useState();
    const style = { height: "100vh" }

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom
            }));
        }
    }, []);

    return (
        <div ref={ref} style={style} id="map" ></div>
    )

}