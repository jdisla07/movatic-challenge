import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StationDetail from "./assets/StationDetail";

function Station() {
  const [station, setStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const paramsStation = useParams();

  useEffect(() => {
    async function getStationById() {
      if (paramsStation) {
        const URL = `/station/${paramsStation.system_id}/${paramsStation.station_id}`;
        const response = await fetch(URL);
        let jsonResponse = await response.json();
        setStation(jsonResponse);
        setIsLoading(false);
      }
    }
    getStationById();
  }, [paramsStation]);

  return (
    <React.Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StationDetail station={station} name={paramsStation.station_name} />
      )}
    </React.Fragment>
  );
}

export default Station;
