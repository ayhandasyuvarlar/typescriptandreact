# React + TypeScript + Vite

```javascript
npm create vite@latest --save
```

later or

```javascript
npm install
```

and

```javascript
npm run dev
```

# First section (Typing Props)

```javascript
// GreetProps.tsx
export type GreetProps = {
  name: string,
};

// Greet.tsx
import { GreetProps } from "../types/GreetProps";

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2> Welcome {props.name} ! You can begin ? </h2>
    </div>
  );
};
```

# Basics Props

```javascript
const personList = [
  {
    firstName: "John",
    lastName: "Edander",
  },
  {
    firstName: "Bruce",
    lastName: "Edander",
  },
  {
    firstName: "Ayhan",
    lastName: "Dasyuvarlar",
  },
];
```

```javascript
type personListType = {
  names: {
    firstName: string,
    lastName: string,
  }[],
};

const PersonList = ({ names }: personListType) => {
  return (
    <div>
      {names.map((name, idx) => (
        <div key={idx}>{name.firstName + " " + name.lastName}</div>
      ))}
    </div>
  );
};

export default PersonList;
///////////////////

type personPropsType = {
  personName: { first: string; last: string };
};

const Person = ({ personName }: personPropsType) => {
  return (
    <h2>
      {personName.first} {personName.last}
    </h2>
  );
};

export default Person;

```

# Advanced Props

You create new 3 file src/components/Oscar.tsx , Status.tsx , Heading.tsx

```javascript
// type pages

export type GreetProps = {
  name: string,
  messageCount?: number,
  isLogged: boolean,
};

export type HeadingProps = {
  children: string,
};

export type OscarProps = {
  children: React.ReactNode,
};

export type StatusProps = {
  status: "loading" | "successfully" | "error",
};
```

and components

```javascript
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

const App = () => {
  return (
    <div>
      <Status status="successfully"></Status>
      <Oscar>
        <Heading>Hello Ayhan</Heading>
      </Oscar>
      <Greet isLogged={true} name="Ayhan"></Greet>
    </div>
  );
};

export default App;
```

```javascript
import { GreetProps } from "../types/GreetProps";
import Person from "./Person";

export const Greet = ({ isLogged, messageCount, name }: GreetProps) => {
  const personName = {
    first: "Bruce",
    last: "Warrior",
  };
  return (
    <div>
      {isLogged && (
        <h2>
          Welcome {name} ! You have {messageCount ? messageCount : null} unread
          messages
        </h2>
      )}
      {!isLogged && "Name"}
      <Person personName={personName} />
    </div>
  );
};
```

```javascript
import { StatusProps } from "../types/Status";

export default function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "successfully") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>message - {message}</h2>
    </div>
  );
}
```

```javascript
import { OscarProps } from "../types/Oscar";

export default function Oscar({ children }: OscarProps) {
  return <div>{children}</div>;
}
```

```javascript
import { HeadingProps } from "../types/Heading";

export default function Heading({ children }: HeadingProps) {
  return <div>{children}</div>;
}
```

and finished advanced prop => next lesson

# Event Props

📌Click Event
📌Change Event

```javascript 

// 📌 Main Page


import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
interface InputProps {
  name: string;
}
const App: React.FC = () => {
  const [userName, setUserName] = useState < InputProps > { name: "" };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(id, event);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName({ name: event.target.value });
    console.log(userName);
  };
  return (
    <div>
      <Button handleClick={handleClick}></Button>
      <Input value={userName.name} onChange={onChange} />
    </div>
  );
};

export default App;
```

```javascript
// 📌 Compoponent and Type  Page
export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
};

import React from "react";
import { ButtonProps } from "../types/ButtonProps";

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};

export default Button;
```

```javascript

// 📌 Compoponent and Type  Page


export type InpuProps = {
  value: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

import { InpuProps } from "../types/InputProps";

const Input = (props: InpuProps) => {
  return <input value={props.value} onChange={props.onChange}></input>;
};

export default Input;
```
and finished event props =>  next lesson