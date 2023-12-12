import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@emotion/react";
import { useMemo } from "react";
import { useGetSalesQuery } from "../state/api";

function OverviewChart({ isDashboard = false, view }) {
  const theme = useTheme();
  const { data, isLoading }   = useGetSalesQuery();
  console.log(data);
  return <div>OverviewChart</div>;
}

export default OverviewChart;
