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
