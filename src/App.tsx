import Circle from "./Circle";
import Example from "./example";

function App() {
  return (
    <div>
      <Circle bgColor="tomato"/>
      <Circle bgColor="teal"/>
      <Example name={"john"} age={30} />
    </div>
  );
}

export default App;
