type personListType = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

const PersonList = ({ names }: personListType) => {
  return (
    <div>
      {names.map((name , idx) => (
        <div key={idx}>{name.firstName + " " + name.lastName}</div>
      ))}
    </div>
  );
};

export default PersonList;
