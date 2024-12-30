import React from "react";

const Filter = () => {
  const users = [
    { id: 1, name: "Syed", active: true },
    { id: 2, name: "Hamid", active: true },
    { id: 3, name: "Majid", active: true },
    { id: 4, name: "Adif", active: false },
    { id: 5, name: "Suman", active: false },
  ];

  const activeUser = users.filter((user) => user.active);

  console.log(activeUser);
  return (
    <div>
      <ul>
        {activeUser.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
