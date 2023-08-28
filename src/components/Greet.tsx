import { GreetProps } from "../types/GreetProps.types";
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
