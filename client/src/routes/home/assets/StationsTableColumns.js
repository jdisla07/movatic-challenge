const getColumns = () => {
  return [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "address", label: "Address", minWidth: 100 },
    {
      id: "lat",
      label: "Latitude",
      minWidth: 170,
    },
    {
      id: "lon",
      label: "Longitude",
      minWidth: 170,
    },
  ];
};

export default getColumns;
