"use client"
import * as d3 from "d3";
import React, { useEffect } from "react";

const BarChart = ({ data }) => {
  useEffect(() => {
    // Clear previous SVG element
    d3.select("#bar-chart-container").select("svg").remove();

    // Filter out ratings with a value of 0
    const filteredData = data.filter(d => d.rating !== 0);


    // Group ratings into specified ranges
    const barData = [
      { label: "1-2", value: filteredData.filter(d => d.rating >= 1 && d.rating < 2).length },
      { label: "2-3", value: filteredData.filter(d => d.rating >= 2 && d.rating < 3).length },
      { label: "3-4", value: filteredData.filter(d => d.rating >= 3 && d.rating < 4).length },
      { label: "4-5", value: filteredData.filter(d => d.rating >= 4 && d.rating <= 5).length }
    ];

    console.log("Filtered data:", barData);

    const svgWidth = 900;
    const svgHeight = 700;
    const margin = { top: 0, right: 40, bottom: 0, left: 60 }; // Adjusted left margin
    const chartWidth = svgWidth - margin.left - margin.right;
    const chartHeight = svgHeight - margin.top - margin.bottom;

    const barSvg = d3.select("#bar-chart-container")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const xScale = d3.scaleBand()
      .domain(barData.map(d => d.label))
      .range([margin.left, margin.left + chartWidth])
      .padding(0.1);


    const yScale = d3.scaleLinear()
      .domain([0, d3.max(barData, d => d.value) * 1.2 || 0])
      .range([margin.top + chartHeight, margin.top]);

    barSvg.selectAll("rect")
      .data(barData)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.label))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => chartHeight - yScale(d.value))
      .attr("fill", "steelblue");

    // Add labels for each bar
    barSvg.selectAll(".bar-label")
      .data(barData)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("x", d => xScale(d.label) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.value) - 5) // Adjusted position above the bar
      .attr("text-anchor", "middle")
      .text(d => d.value);


    // Add y-axis
    barSvg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    barSvg.append("text")
      .attr("x", svgWidth / 2)
      .attr("y", 60)
      .attr("text-anchor", "middle")
      .style("font-size", "32px")
      .style("font-weight", "bold")
      .text("Number of Ratings in Each Range");

  }, [data]);

  return <div id="bar-chart-container" />;
};

export default BarChart;

