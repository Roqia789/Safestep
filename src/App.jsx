import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box"; // ✅ Import MUI Box
import "./App.css";

import Home from "./Modules/Home/Home";
import Feedback from "./Modules/Feedback/Feedback";
import Login from "./Modules/Auth/Login";
import Sidebar, { Main } from "./components/shared/Sidebar";

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const noSidebarRoutes = ["/login"];
  const isSidebarVisible = !noSidebarRoutes.includes(location.pathname);

  return (
    <>
      {isSidebarVisible ? (
        <Box sx={{ display: "flex", width: "100%", overflowX: "auto" }}>
          <Sidebar open={open} setOpen={setOpen} />
          <Main
            open={open}
            sx={{ flexGrow: 1, paddingY: 10, width: "100%", overflowX: "auto" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Main>
        </Box>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
