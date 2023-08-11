import { Greet } from "./components/Greet";
import PersonList from "./components/PersonList";

const App = () => {
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
  return (
    <div>
      <Greet messageCount={20} name={"ayhan"} isLogged={true}></Greet>
      <PersonList names={personList}></PersonList>
    </div>
  );
};

export default App;
