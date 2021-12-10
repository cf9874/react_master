import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
    // same same ↑↓
    console.log(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("your input value is", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username" value={value} onChange={onChange} />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
