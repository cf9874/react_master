import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const rotation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
transform:rotate(180deg);
border-radius: 100px;

  }
  100%{
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: powderblue;
  animation: ${rotation} 2s linear infinite;
  text-align: center;
  line-height: 200px;
`;

function App() {
  return (
    <Father>
      <Box>@ ~ rotation ~ @</Box>
    </Father>
  );
}

export default App;
