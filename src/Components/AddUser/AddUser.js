import React from "react";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    //send data to the server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully !!!");
        e.target.reset();
      });
  };
  return (
    <div>
      <h2>Connenting MongoDB with Client site.</h2>
      <h3>Please Add a New User.</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Your Name" id="" required />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          id=""
          required
        />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
