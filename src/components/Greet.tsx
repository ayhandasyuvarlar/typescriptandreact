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
          Welcome {name} ! You have {messageCount} unread messages
        </h2>
      )}
      {!isLogged && "Name"}
      <Person personName={personName} />
    </div>
  );
};
