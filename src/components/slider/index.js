import { Box, Slide } from "@mui/material";
import { SliderContainer, SliderMessage } from "../../styles/slider";
import { useEffect, useRef, useState } from "react";

const messages = [
  "Introducing Portell wines 🍷",
  "A pleasure with denomination of Origin",
  "Refinement in a bottle ",
];

export default function Slider() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const IntervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => {
      clearInterval(IntervalId);
    };
  }, []);
  return (
    <SliderContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{ enter: 500, exit: 100 }}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <SliderMessage>{messages[messageIndex]}</SliderMessage>
        </Box>
      </Slide>
    </SliderContainer>
  );
}
