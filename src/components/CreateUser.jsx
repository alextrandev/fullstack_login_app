function CreateUser() {
  return (
    <>
    <h2>CreateUser</h2>
    <form className="flex flex-col">
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