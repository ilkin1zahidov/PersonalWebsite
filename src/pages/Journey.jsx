import React from "react";
import "../assets/css/journey.css"
import Journey from "../components/journey/journey";
import JourneyImg from "../assets/img/journeyImg.svg";

const journey = () => {

    return(
        <>
        <Journey
            image = {JourneyImg}
        />
        </>
    )

}

export default journey