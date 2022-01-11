import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

PageComponent.propTypes = {
  spaceName: PropTypes.string.isRequired,
  toolbar: PropTypes.node,
  content: PropTypes.node,
};

function PageComponent({ spaceName, content, toolbar }) {
  return (
    <React.Fragment>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {spaceName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box margin={2}>{content}</Box>
    </React.Fragment>
  );
}

export default PageComponent;
