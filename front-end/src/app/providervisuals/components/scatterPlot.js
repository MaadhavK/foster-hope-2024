"use client"
import * as d3 from "d3";
import React, { useEffect } from "react";

const ScatterPlot = ({ data }) => {
  useEffect(() => {
    // Clear previous SVG element
    d3.select("#scatter-container").select("svg").remove();

    const margin = {top: 10, right: 30, bottom: 70, left: 100},
    width = 900 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#scatter-container")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    
    const root = JSON.parse(data);

    // Add X axis
    var x = d3.scaleLinear()
        .domain([0, 1000])
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 1000000])
        .range([ height, 100]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(root)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.beds); } )
        .attr("cy", function (d) { return y(d.revenue); } )
        .attr("r", 2.5)
        .style("fill", "#9c70ba")

    svg.append("text")
        .attr("x", width / 2) // Set x position to half of the SVG width
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .style("font-size", "32px")
        .style("font-weight", "bold")
        .text("Hospital Beds vs. Gross Revenue");
    
    svg.append("text")
        .attr("x", width / 2) // Set x position to half of the SVG width
        .attr("y", 670)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Number of Hospital Beds");
    
    svg.append("text")
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Gross Revenue of Hospital")
        .attr("transform", "translate(-70," + (height / 2) + ") rotate(-90)");

  }, [data]);

  return (
    <div id="scatter-container" style={{color:"black"}} />
  );
};

export default ScatterPlot;


