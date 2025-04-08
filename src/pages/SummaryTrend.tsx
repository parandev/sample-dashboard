"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import Plot from "react-plotly.js"

export default function SummaryTrend() {
  // State for filters
  const [dateRange, setDateRange] = useState("Prior Year")
  const [dateAggregation, setDateAggregation] = useState("Monthly")
  const [region, setRegion] = useState("Central Metro")

  // Common x-axis dates for all charts
  const months = ["May 2024", "Jul 2024", "Sep 2024", "Nov 2024", "Jan 2025", "Mar 2025"]

  // Performance metrics data
  const performanceMetrics = [
    {
      title: "Throughput",
      startValue: 1191,
      endValue: 1345,
      data: [1191, 1220, 1250, 1210, 1230, 1345],
      color: "#4CAF50",
    },
    {
      title: "Arrivals on Green",
      startValue: "71.4%",
      endValue: "69.7%",
      data: [71.4, 75.2, 68.1, 65.7, 68.5, 69.7],
      color: "#4CAF50",
    },
    {
      title: "Progression Ratio",
      startValue: 1.07,
      endValue: 1.08,
      data: [1.07, 1.12, 1.09, 1.06, 1.05, 1.08],
      color: "#4CAF50",
    },
    {
      title: "Queue Spillback",
      startValue: "17.4%",
      endValue: "21.5%",
      data: [17.4, 16.8, 18.1, 19.7, 18.5, 21.5],
      color: "#4CAF50",
    },
    {
      title: "Peak Period Split Failure",
      startValue: "8.3%",
      endValue: "11.8%",
      data: [8.3, 7.8, 9.1, 10.7, 9.5, 11.8],
      color: "#4CAF50",
    },
    {
      title: "Off-Peak Split Failure",
      startValue: "4.7%",
      endValue: "5.2%",
      data: [4.7, 4.2, 4.1, 5.7, 4.5, 5.2],
      color: "#4CAF50",
    },
    {
      title: "Travel Time Index",
      startValue: 1.31,
      endValue: 1.35,
      data: [1.31, 1.32, 1.36, 1.33, 1.34, 1.35],
      color: "#4CAF50",
    },
    {
      title: "Planning Time Index",
      startValue: 1.42,
      endValue: 1.4,
      data: [1.42, 1.44, 1.46, 1.43, 1.41, 1.4],
      color: "#4CAF50",
    },
  ]

  // Volume metrics data
  const volumeMetrics = [
    {
      title: "Daily Volume",
      startValue: 17239,
      endValue: 17744,
      data: [17239, 17100, 17500, 17200, 17000, 17744],
      color: "#2196F3",
    },
    {
      title: "AM Hourly Volume",
      startValue: 919,
      endValue: 970,
      data: [919, 900, 940, 950, 920, 970],
      color: "#2196F3",
    },
    {
      title: "PM Hourly Volume",
      startValue: 1188,
      endValue: 1222,
      data: [1188, 1150, 1200, 1250, 1180, 1222],
      color: "#2196F3",
    },
    {
      title: "Pedestrian Activations",
      startValue: 249,
      endValue: 268,
      data: [249, 230, 250, 255, 240, 268],
      color: "#2196F3",
    },
  ]

  // Equipment metrics data
  const equipmentMetrics = [
    {
      title: "Detector Uptime",
      startValue: "83.8%",
      endValue: "84.4%",
      data: [83.8, 83.5, 84.0, 84.2, 84.3, 84.4],
      color: "#F44336",
    },
    {
      title: "Ped Pushbutton Uptime",
      startValue: "94%",
      endValue: "96.6%",
      data: [94.0, 93.0, 94.5, 95.0, 96.0, 96.6],
      color: "#F44336",
    },
    {
      title: "CCTV Uptime",
      startValue: "81.7%",
      endValue: "84.9%",
      data: [81.7, 82.5, 83.0, 83.5, 84.0, 84.9],
      color: "#F44336",
    },
    {
      title: "Comm Uptime",
      startValue: "99.4%",
      endValue: "99.4%",
      data: [99.4, 98.0, 97.0, 98.5, 99.0, 99.4],
      color: "#F44336",
    },
  ]

  // Create a line chart for performance metrics
  const createPerformanceChart = (metric) => {
    return (
      <Box sx={{ mb: 3, height: 80 }} key={metric.title}>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          {metric.title}
        </Typography>
        <Plot
          data={[
            {
              x: months,
              y: metric.data,
              type: "scatter",
              mode: "lines",
              line: { color: metric.color, width: 2 },
              fill: "none",
            },
          ]}
          layout={{
            autosize: true,
            height: 60,
            margin: { l: 40, r: 40, t: 0, b: 20 },
            xaxis: {
              showgrid: false,
              zeroline: false,
              tickfont: { size: 10 },
            },
            yaxis: {
              showgrid: false,
              zeroline: false,
              showticklabels: false,
            },
            showlegend: false,
            annotations: [
              {
                x: months[0],
                y: metric.data[0],
                text: String(metric.startValue),
                showarrow: false,
                font: { size: 10 },
                xanchor: "left",
                yanchor: "bottom",
              },
              {
                x: months[months.length - 1],
                y: metric.data[metric.data.length - 1],
                text: String(metric.endValue),
                showarrow: false,
                font: { size: 10 },
                xanchor: "right",
                yanchor: "bottom",
              },
            ],
          }}
          config={{ displayModeBar: false }}
          style={{ width: "100%" }}
        />
      </Box>
    )
  }

  // Create a line chart for volume metrics
  const createVolumeChart = (metric) => {
    return (
      <Box sx={{ mb: 3, height: 80 }} key={metric.title}>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          {metric.title}
        </Typography>
        <Plot
          data={[
            {
              x: months,
              y: metric.data,
              type: "scatter",
              mode: "lines",
              line: { color: metric.color, width: 2 },
              fill: "none",
            },
          ]}
          layout={{
            autosize: true,
            height: 60,
            margin: { l: 40, r: 40, t: 0, b: 20 },
            xaxis: {
              showgrid: false,
              zeroline: false,
              tickfont: { size: 10 },
            },
            yaxis: {
              showgrid: false,
              zeroline: false,
              showticklabels: false,
            },
            showlegend: false,
            annotations: [
              {
                x: months[0],
                y: metric.data[0],
                text: String(metric.startValue),
                showarrow: false,
                font: { size: 10 },
                xanchor: "left",
                yanchor: "bottom",
              },
              {
                x: months[months.length - 1],
                y: metric.data[metric.data.length - 1],
                text: String(metric.endValue),
                showarrow: false,
                font: { size: 10 },
                xanchor: "right",
                yanchor: "bottom",
              },
            ],
          }}
          config={{ displayModeBar: false }}
          style={{ width: "100%" }}
        />
      </Box>
    )
  }

  // Create an area chart for equipment metrics
  const createEquipmentChart = (metric) => {
    return (
      <Box sx={{ mb: 3, height: 80 }} key={metric.title}>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          {metric.title}
        </Typography>
        <Plot
          data={[
            {
              x: months,
              y: metric.data,
              type: "scatter",
              mode: "lines",
              line: { color: metric.color, width: 2 },
              fill: "tozeroy",
              fillcolor: `rgba(244, 67, 54, 0.1)`,
            },
          ]}
          layout={{
            autosize: true,
            height: 60,
            margin: { l: 40, r: 40, t: 0, b: 20 },
            xaxis: {
              showgrid: false,
              zeroline: false,
              tickfont: { size: 10 },
            },
            yaxis: {
              showgrid: false,
              zeroline: false,
              showticklabels: false,
            },
            showlegend: false,
            annotations: [
              {
                x: months[0],
                y: metric.data[0],
                text: String(metric.startValue),
                showarrow: false,
                font: { size: 10 },
                xanchor: "left",
                yanchor: "bottom",
              },
              {
                x: months[months.length - 1],
                y: metric.data[metric.data.length - 1],
                text: String(metric.endValue),
                showarrow: false,
                font: { size: 10 },
                xanchor: "right",
                yanchor: "bottom",
              },
            ],
          }}
          config={{ displayModeBar: false }}
          style={{ width: "100%" }}
        />
      </Box>
    )
  }

  return (
    <Box sx={{ p: 2 }}>
      {/* Filter Chips */}
      <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
        <Chip label={`Date Range: ${dateRange}`} variant="outlined" sx={{ bgcolor: "#f5f5f5", borderRadius: 1 }} />
        <Chip
          label={`Data Aggregation: ${dateAggregation}`}
          variant="outlined"
          sx={{ bgcolor: "#f5f5f5", borderRadius: 1 }}
        />
        <Chip label={`Region: ${region}`} variant="outlined" sx={{ bgcolor: "#f5f5f5", borderRadius: 1 }} />
      </Box>

      <Grid container spacing={3}>
        {/* Performance Metrics */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Performance
            </Typography>
            {performanceMetrics.map((metric) => createPerformanceChart(metric))}
          </Paper>
        </Grid>

        {/* Volumes and Equipment Metrics */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Volumes and Equipment
            </Typography>
            {/* Volume Metrics */}
            {volumeMetrics.map((metric) => createVolumeChart(metric))}

            {/* Equipment Metrics */}
            {equipmentMetrics.map((metric) => createEquipmentChart(metric))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
