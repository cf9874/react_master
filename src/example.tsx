interface ExampleProps {
    name: string;
    age: number;
}

const Example =(prop:ExampleProps)=>
     <div>
         `hello your name is {prop.name} and you are {prop.age} years old`
     </div>

export default Example;