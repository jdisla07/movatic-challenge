import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StationDetail from "./assets/StationDetail";

function Station() {
  const [station, setStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getStationById() {
      if (params) {
        const URL = `/station/${params.system_id}/${params.station_id}`;
        console.log(URL);
        const response = await fetch(URL);
        let resjsonResponse = await response.json();
        setStation(resjsonResponse);
        setIsLoading(false);
      }
    }
    getStationById();
  }, []);

  const params = useParams();

  return (
    <React.Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StationDetail station={station} name={params.station_name} />
      )}
    </React.Fragment>
  );
}

export default Station;
