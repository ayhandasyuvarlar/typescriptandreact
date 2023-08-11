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
