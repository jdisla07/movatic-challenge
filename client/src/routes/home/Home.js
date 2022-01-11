import React, { useState, useEffect } from "react";
import Page from "../../components/page/Page";
import TableComponent from "../../components/table/TableComponent";
import getColumns from "./assets/StationsTableColumns";

function Home() {
  const [system, setSystem] = useState({
    value: "bcycle_mcallen",
    label: "bcycle_mcallen",
  });
  const [stations, setStations] = useState([]);
  
  useEffect(() => {
    async function getStations() {
      if (system) {
        const URL = `/stations/${system.value}`;
        const response = await fetch(URL);
        let jsonResponse = await response.json();
        setStations(jsonResponse.stations);
      }
    }
    getStations();
  }, [system]);

  const onRowClick = (station_id, station_name) => {
    console.log(station_id, station_name);
  };

  return (
    <Page
      spaceName={"Home Page"}
      content={
        <TableComponent
          onRowClick={onRowClick}
          rows={stations}
          columns={getColumns()}
        />
      }
    />
  );
}

export default Home;
