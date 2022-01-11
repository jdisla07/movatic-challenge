import React, { useState, useEffect } from "react";
import PageComponent from "../../components/page/PageComponent";
import TableComponent from "../../components/table/TableComponent";
import SelectComponent from "../../components/select/SelectComponent";
import { SELECT_OPTIONS, TABLE_COLUMNS } from "./assets/HomeConstans";

function Home() {
  const [system, setSystem] = useState(null);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    setSystem(JSON.parse(localStorage.getItem("system")));
  }, []);

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

  const onSelectChange = (data) => {
    localStorage.setItem("system", JSON.stringify(data));
    setSystem(data);
  };

  return (
    <PageComponent
      spaceName={"Home Page"}
      content={
        <React.Fragment>
          <SelectComponent
            defaultValue={system ? system.label : ""}
            tag={"Select System"}
            onChange={onSelectChange}
            options={SELECT_OPTIONS}
          />
          <TableComponent
            onRowClick={onRowClick}
            rows={stations}
            columns={TABLE_COLUMNS}
          />
        </React.Fragment>
      }
    />
  );
}

export default Home;
