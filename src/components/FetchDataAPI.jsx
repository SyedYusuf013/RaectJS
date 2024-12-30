import React, { useEffect, useState } from "react";

const FetchDataAPI = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await api.json();

      setApiData(data);
      console.log("Data is coming = ", data);
    };

    fetchData();
  }, []);

  console.log("Data is coming from state = ", apiData);

  return (
    <>
      <div>
        <h2>FetchDataFromAPI</h2>
        {apiData.map((data) => (
          <div
            key={data.id}
            className="p-3 m-5 text-center text-gray-950 bg-violet-600"
          >
            <h3>Name = {data.name}</h3>
            <h3>Email = {data.email}</h3>
            <h4>Username = {data.username}</h4>
            <p>Contact = {data.phone}</p>
            <a>Website = {data.website}</a>
            <h5>City = {data.address.city}</h5>
            <h5>Company Name = {data.company.name}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchDataAPI;
