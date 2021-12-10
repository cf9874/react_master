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

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

// function Circle(props:CircleProps){
//     return <Container  bgColor={props.bgColor} borderColor={props.borderColor ?? "white"}></Container>
// }

export default Circle;
