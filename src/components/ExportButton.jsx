import React from "react";
import { toSvg } from "html-to-image";

const ExportButton = ({ svgRef }) => {
  const exportAsSvg = () => {
    if (svgRef.current) {
      toSvg(svgRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "d3-chart.svg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Failed to export as SVG", err);
        });
    }
  };

  return <button onClick={exportAsSvg}>Export as SVG</button>;
};

export default ExportButton;
