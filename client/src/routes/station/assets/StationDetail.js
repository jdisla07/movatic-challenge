import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../../shared/utils";
import ControlTableComponent from "../../../components/table/ControlTableComponent";
import PageComponent from "../../../components/page/PageComponent";

StationDetail.propTypes = {
  station: PropTypes.object.isRequired,
  name: PropTypes.string,
};

function StationDetail({ station, name }) {
  const rows = [
    {
      title: "Returning",
      content: station.is_returning === 0 ? "No" : "Yes",
    },
    {
      title: "Renting",
      content: station.is_renting === 0 ? "No" : "Yes",
    },
    {
      title: "Installed",
      content: station.is_installed === 0 ? "No" : "Yes",
    },
    {
      title: "Docks Available",
      content: station.num_docks_available,
    },
    {
      title: "Bikes Available",
      content: (
        <div>
          <div>{`Electrics: ${station.num_bikes_available_types.electric}`}</div>
          <div>{`Smart: ${station.num_bikes_available_types.smart}`}</div>
          <div>{`Classics: ${station.num_bikes_available_types.classic}`}</div>
        </div>
      ),
    },
    {
      title: "Last Reported",
      content: formatDate(new Date(station.last_reported * 1000)),
    },
  ];
  return (
    <PageComponent
      spaceName={`Station: ${name}`}
      content={<ControlTableComponent rows={rows} />}
    />
  );
}

export default StationDetail;
