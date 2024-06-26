import React, { useState, useEffect } from "react";
import D3Chart from "./components/D3Chart";
import SliderControls from "./components/SliderControls";
import styled from "styled-components";
// import "./App.css";

const MainContainer = styled.div`
  padding: 10px;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: ${props => props.fdir ?? "column"};
  align-items: ${props => props.align ?? "start"};
  justify-content: ${props => props.justify ?? "start"};
  gap: 10px;
`;



function App() {
  const [width, setWidth] = useState(window.innerWidth / 2);
  const [height, setHeight] = useState(window.innerHeight / 2);
  const [maxWidth, setMaxWidth] = useState(window.innerWidth);
  const [maxHeight, setMaxHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
      setMaxHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MainContainer>
      <SliderControls
        width={width}
        height={height}
        onWidthChange={setWidth}
        onHeightChange={setHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
      />
      <D3Chart width={width} height={height} />
    </MainContainer>
  );
}

export default App;
