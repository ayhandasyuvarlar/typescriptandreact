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
      <Greet isLogged={true}  name="Ayhan"></Greet>
    </div>
  );
};

export default App;
