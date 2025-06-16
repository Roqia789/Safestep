import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import { Settings as SettingsIcon } from "@mui/icons-material";

const ProgressCircle = ({ value, label }) => {
  return (
    <Box className="flex items-center space-x-4">
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={value}
          size={80}
          thickness={5}
          style={{ color: "#0C4A6E" }} // Tailwind dark blue
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" component="div" color="textPrimary">
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="subtitle1" className="text-gray-700">
        {label}
      </Typography>
    </Box>
  );
};

const CustomerStats = () => {
  // Dummy data
  const currentUsers = 85;
  const newUsers = 66;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-auto space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Customers</h2>
          <p className="text-sm text-gray-500">Information About your Customers</p>
        </div>
        <SettingsIcon className="text-gray-500" />
      </div>

      <ProgressCircle value={currentUsers} label="Current Users" />
      <ProgressCircle value={newUsers} label="New Users" />
    </div>
  );
};

export default CustomerStats;
