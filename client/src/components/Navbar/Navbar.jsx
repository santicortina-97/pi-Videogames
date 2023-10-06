import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"

const Navbar = ({handleChange,handleSubmit}) => {

  return (
    <div className={style.container}>
      <form onChange={handleChange} className={style.containerForm}>
        <input type="text" />
        <button type='submit' onClick={handleSubmit}>Search</button>
      </form>
      <NavLink to={"/create"}><button>Create</button></NavLink>
      
      <button>Created</button>
    </div>
  )
}

export default Navbar