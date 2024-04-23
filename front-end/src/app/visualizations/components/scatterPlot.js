"use client"
import * as d3 from "d3";
import React, { useEffect } from "react";
import { Lora} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})

const ScatterPlot = ({ data }) => {
  useEffect(() => {
    // Clear previous SVG element
    d3.select("#scatter-container").select("svg").remove();

    const margin = {top: 10, right: 0, bottom: 70, left: 70},
    width = 900 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#scatter-container")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g");
    
    const root = JSON.parse(data);

    // Add X axis
    var x = d3.scaleLog()
        .domain([1e2, 1e7])
        .range([margin.left, width - margin.right]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 700])
        .range([ height, 100]);
    svg.append("g")
        .attr("transform", "translate(" +margin.left+ ",0)")
        .call(d3.axisLeft(y));

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(root)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.population); } )
        .attr("cy", function (d) { return y(d.fosterHomes); } )
        .attr("r", 2.5)
        .style("fill", "#9c70ba")

    svg.append("text")
        .attr("x", width / 2 + (margin.left / 2)) // Set x position to half of the SVG width
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .style("font-size", "32px")
        .text("County Population vs Foster Homes");
    
    svg.append("text")
        .attr("x", width / 2 + (margin.left / 2)) // Set x position to half of the SVG width
        .attr("y", 670)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("County Population (log scaled)");
    
    svg.append("text")
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Number of Foster Homes")
        .attr("transform", "translate(20," + ((height / 2) + margin.top + 20) + ") rotate(-90)");

  }, [data]);

  return (
    <div id="scatter-container" className={lora.className} style={{color:"black"}} />
  );
};

export default ScatterPlot;


