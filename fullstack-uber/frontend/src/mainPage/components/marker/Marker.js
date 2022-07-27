import { useEffect } from "react";

export const Marker = ({position}) => {
   
    useEffect(() => {
        new window.google.Marker({position})
        
    }, []);

    return ( null )

}