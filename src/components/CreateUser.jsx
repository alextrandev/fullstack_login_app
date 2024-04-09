import { useState } from "react";

function CreateUser() {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
  }
  const handleChange = e => setInputs({...inputs, [e.target.name]: e.target.value});

  return (
    <>
    <h2>CreateUser</h2>
    <form className="flex flex-col" onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="phone">Phone number</label>
      <input type="number" name="phone" id="phone" />
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default CreateUser