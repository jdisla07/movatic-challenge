import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Station from "./routes/station/Station";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/station/:system_id/:station_id/:station_name"
        element={<Station />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
