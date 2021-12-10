import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
    anyPro?: boolean; // optional
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

interface CircleProps {
    bgColor: string;
    borderColor: string;
    text?: string;
}


function Circle(props: CircleProps) {
    const [counter, setCounter] = useState<number | string>(0)
    setCounter(1);
    setCounter("hi");
    // setCounter(true);
    return <Container bgColor={props.bgColor} borderColor={props.borderColor ?? "white"}></Container>
}

export default Circle;
