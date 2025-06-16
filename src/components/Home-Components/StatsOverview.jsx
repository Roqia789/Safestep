import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import { Settings as SettingsIcon } from "@mui/icons-material";

const GenderStat = ({ label, value, color }) => {
  return (
    <Box className="space-y-1">
      <Box className="flex justify-between items-center">
        <Typography className="text-sm font-medium text-gray-700">{label}</Typography>
        <Typography className="text-sm text-gray-700">{value}%</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: "#E5E7EB", // Tailwind gray-200
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
      />
    </Box>
  );
};

const StatsOverview = () => {
  // Dummy data
  const womenPercentage = 63;
  const menPercentage = 88;

  return (
    <div className="bg-white shadow-md rounded-xl p-6  space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Stats Overview</h2>
          <p className="text-sm text-gray-500">Information about store visits</p>
        </div>
        <SettingsIcon className="text-gray-500" />
      </div>

      <GenderStat label="Women" value={womenPercentage} color="#0C4A6E" />
      <GenderStat label="Men" value={menPercentage} color="#3B82F6" />
    </div>
  );
};

export default StatsOverview;
