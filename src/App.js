import styled, { keyframes } from "styled-components";

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
const Father = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Text = styled.div`
  color: tomato;
`;

const Box = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  background-color: powderblue;
  animation: ${rotation} 2s linear infinite;
  justify-content: center;
  align-items: center;
  ${Text} {
    &:hover {
      color: white;
      font-size: 30px;
    }
  }
  span {
    font-size: 20px;
    &:hover {
      color: red;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <span>@ ~ rotation ~ @</span>
      </Box>
      <Box>
        <Text>ss</Text>
      </Box>
    </Father>
  );
}

export default App;
