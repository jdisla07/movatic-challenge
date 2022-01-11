import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Grid, Typography } from "@material-ui/core";

SelectComponent.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

function SelectComponent({ options, defaultValue, onChange, tag }) {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography variant={"h6"}>{tag}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Select
          value={options.filter((option) => option.label === defaultValue)}
          onChange={onChange}
          options={options}
        />
      </Grid>
    </Grid>
  );
}

export default SelectComponent;
