import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Header = ({ svgRef, width, height }) => {
  const setupSvg = () => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");

    const defs = svg.append("defs");
    defs
      .append("marker")
      .attr("id", "end-arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 6)
      .attr("markerWidth", 3)
      .attr("markerHeight", 3)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#000");

    return svg;
  };

  useEffect(() => {
    if (svgRef.current) {
      setupSvg();
    }
  }, [svgRef, width, height]);

  return null;
};

export default D3Header;
