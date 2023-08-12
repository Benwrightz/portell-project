import { Box, Slide } from "@mui/material";
import { SliderContainer, SliderMessage } from "../../styles/slider";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const messages = ["intro", "pleasure", "refine"];

export default function Slider() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const { t } = useTranslation();
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
          <SliderMessage>
            {t(`messages.${messages[messageIndex]}`)}
          </SliderMessage>
        </Box>
      </Slide>
    </SliderContainer>
  );
}
