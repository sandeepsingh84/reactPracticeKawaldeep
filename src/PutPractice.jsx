import axios from "axios";
import React, { useState } from "react";

const PutPractice = () => {
  const [data, setData] = useState({
    name: null,
    job: null,
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const updateUser = (data) => {
    console.log('data', data)
    axios
      .put(`https://reqres.in/api/users`, data)
      .then((res) => 
      setData (res?.data))
      //  console.log("res", res))

      .catch((err) => console.log("err", err));
  };

  return (
    <div>
        <div>
      PutPractice
      </div>
      <label htmlFor="name">name</label>
      <input
        className="border"
        value={data?.name}
        placeholder="enter name"
        onChange={handleChange}
        name="name"

      />
      <label htmlFor="job">job</label>
      <input
        className="border"
        value={data?.job}
        placeholder="enter job"
        onChange={handleChange}
        name="job"
      />
      <div className="cursor-pointer" onClick={() => {updateUser(data);

    }
    }>
        update
      </div>.
      <p>{data?.job}</p>
      <p>{data.name}</p>
    </div>
  );
};

export default PutPractice;
