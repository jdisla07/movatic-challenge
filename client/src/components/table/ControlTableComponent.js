import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";

ControlTableComponent.propTypes = {
  rows: PropTypes.array.isRequired,
};

function ControlTableComponent({ rows }) {
  return (
    <Table>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.title}>
            <TableCell style={{ verticalAlign: "top" }}>
              <Typography variant={"h5"}>{row.title}</Typography>
            </TableCell>
            <TableCell>{row.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ControlTableComponent;
