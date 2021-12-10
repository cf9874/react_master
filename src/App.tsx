import Circle from "./Circle";
import Example from "./example";

function App() {
  return (
    <div>
      <Circle bgColor="tomato" borderColor="black" text="i'm here" />
      <Circle bgColor="teal" borderColor="tomato" text="i'm here" />
      <Example name={"john"} age={30} />
    </div>
  );
}

export default App;
