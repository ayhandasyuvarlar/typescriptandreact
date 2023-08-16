import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
interface InputProps {
  name: string;
}
const App: React.FC = () => {
  const [userName, setUserName] = useState<InputProps>({ name: "" });
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(id , event);
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
