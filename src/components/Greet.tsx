import { GreetProps } from "../types/GreetProps";

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2> Welcome {props.name} ! You can begin ? </h2>
    </div>
  );
};
