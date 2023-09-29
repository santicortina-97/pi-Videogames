import React from 'react'

const Navbar = ({handleChange,handleSubmit}) => {

  return (
    <div>
      <form onChange={handleChange}>
        <input type="text" />
        <button type='submit' onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
}

export default Navbar