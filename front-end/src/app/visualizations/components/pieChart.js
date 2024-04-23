"use client"
import * as d3 from "d3";
import React, { useEffect } from "react";

const PieChart = ({ data }) => {
  useEffect(() => {

    // Clear previous SVG element
    d3.select("#pie-chart-container").select("svg").remove();

    const counties = data.map((county) => ({
      name: county.county,
      fosterHomes: parseInt(county.number_of_homes)
    }));

    const ranges = [
      { label: "0-50", min: 0, max: 50 },
      { label: "50-100", min: 50, max: 100 },
      { label: "100-150", min: 100, max: 150 },
      { label: "150-200", min: 150, max: 200 }
    ];

    const getCountyRange = (fosterHomes) => {
      for (const range of ranges) {
        if (fosterHomes >= range.min && fosterHomes < range.max) {
          return range.label;
        }
      }
      return "200+";
    };

    const groupedCounties = {};
    counties.forEach((county) => {
      const range = getCountyRange(county.fosterHomes);
      groupedCounties[range] = (groupedCounties[range] || 0) + 1;
    });

    const pieData = Object.entries(groupedCounties).map(([range, count]) => ({
      label: range,
      value: count
    }));

    // Sort pieData based on the numerical part of the label
    pieData.sort((a, b) => {
      const numA = parseInt(a.label.split('-')[0]);
      const numB = parseInt(b.label.split('-')[0]);
      return numA - numB;
    });

    const pie = d3.pie().value((d) => d.value);
    const arcData = pie(pieData);

    const arc = d3.arc().innerRadius(0).outerRadius(250);

    const svg = d3
      .select("#pie-chart-container")
      .append("svg")
      .attr("width", 900)
      .attr("height", 700);

    const g = svg.append("g").attr("transform", "translate(300,350)");

    g.selectAll("path")
      .data(arcData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => d3.schemeCategory10[i]);

    // Add legend
    const legend = svg.append("g").attr("transform", "translate(600,125)");
    const legendRectSize = 25;
    const legendSpacing = 8;

    const legendItems = legend
      .selectAll(".legend-item")
      .data(pieData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr(
        "transform",
        (d, i) => "translate(0," + i * (legendRectSize + legendSpacing) + ")"
      );

    legendItems
      .append("rect")
      .attr("width", legendRectSize)
      .attr("height", legendRectSize)
      .attr("fill", (d, i) => d3.schemeCategory10[i]);

    const total = pieData.reduce((acc, entry) => acc + entry.value, 0);
    legendItems
      .append("text")
      .attr("x", legendRectSize + legendSpacing)
      .attr("y", legendRectSize - legendSpacing)
      .text((d) => `${d.label} (${((d.value / total) * 100).toFixed(2)}%)`);

    
      const svgWidth = 900; // Width of the SVG element

      svg
        .append("text")
        .attr("x", svgWidth / 2) // Set x position to half of the SVG width
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .style("font-size", "32px")
        .style("font-weight", "bold")
        .text("Number of Foster Homes in Each County");
  }, [data]);

  return (
      <div id="pie-chart-container" />
  );
};

export default PieChart;
