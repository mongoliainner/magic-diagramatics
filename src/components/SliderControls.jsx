import React from "react";

const SliderControls = ({
  width,
  height,
  onWidthChange,
  onHeightChange,
  maxWidth,
  maxHeight,
}) => {
  return (
    <div className="slider-controls">
      <div>
        <label>Width: </label>
        <input
          type="range"
          min="100"
          max={maxWidth}
          value={width}
          onChange={(e) => onWidthChange(parseInt(e.target.value, 10))}
        />
        <span>{width}px</span>
      </div>
      <div>
        <label>Height: </label>
        <input
          type="range"
          min="100"
          max={maxHeight}
          value={height}
          onChange={(e) => onHeightChange(parseInt(e.target.value, 10))}
        />
        <span>{height}px</span>
      </div>
    </div>
  );
};

export default SliderControls;
