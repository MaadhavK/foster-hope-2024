"use client"
import * as d3 from "d3";
import React, { useEffect } from "react";
import { Black_And_White_Picture, Lora} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})

const PieChart = ({ data }) => {
  useEffect(() => {
    // Clear previous SVG element
    d3.select("#pie-chart-container").select("svg").remove();

    // Count occurrences of each event category
    const eventCounts = data.reduce((counts, event) => {
      counts[event.event_category] = (counts[event.event_category] || 0) + 1;
      return counts;
    }, {});

    // Sort event counts in descending order
    const sortedEventCounts = Object.entries(eventCounts).sort((a, b) => b[1] - a[1]);

    // Select the top five categories and aggregate the rest into "Others"
    const topCategories = sortedEventCounts.slice(0, 5);
    const othersCount = sortedEventCounts.slice(5).reduce((sum, [, count]) => sum + count, 0);
    const pieData = [...topCategories, ['others', othersCount]];

    const pie = d3.pie().value((d) => d[1]);
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

    const total = pieData.reduce((acc, [, value]) => acc + value, 0);
    legendItems
      .append("text")
      .attr("x", legendRectSize + legendSpacing)
      .attr("y", legendRectSize - legendSpacing)
      .text((d) => `${d[0]} (${((d[1] / total) * 100).toFixed(2)}%)`);

    const svgWidth = 900; // Width of the SVG element

    svg
      .append("text")
      .attr("x", svgWidth / 2) // Set x position to half of the SVG width
      .attr("y", 60)
      .attr("text-anchor", "middle")
      .style("font-size", "32px")
      .style("font-weight", "bold")
      .text("Event Categories Distribution");
  }, [data]);

  return (
    <div id="pie-chart-container" className={lora.className} style={{color:"black"}}/>
  );
};

export default PieChart;


