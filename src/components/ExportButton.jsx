import React from "react";
import { toPng } from "html-to-image";

const ExportButton = ({ svgRef }) => {
  const exportAsPng = () => {
    if (svgRef.current) {
      toPng(svgRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "d3-chart.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Failed to export as PNG", err);
        });
    }
  };

  return <button onClick={exportAsPng}>Export as PNG</button>;
};

export default ExportButton;
