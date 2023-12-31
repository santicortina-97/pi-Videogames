import React, { useEffect } from 'react';
import {NavLink} from "react-router-dom"
import style from "./LandingPage.module.css";

const LandingPage = () => {

    return (
        <div className={style.container}>
            <NavLink to={`/home`} ><svg className={style.button} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm.06 17.68a1.28 1.28 0 0 1-1.29-1.28V8.65a1.29 1.29 0 0 1 2.58 0v9.75a1.28 1.28 0 0 1-1.29 1.28ZM18 27.79a9.88 9.88 0 0 1-5.83-17.94a1.4 1.4 0 0 1 1.94.31a1.37 1.37 0 0 1-.31 1.92a7.18 7.18 0 1 0 11.43 5.8a7.07 7.07 0 0 0-3-5.76A1.37 1.37 0 0 1 22 10.2a1.4 1.4 0 0 1 1.94-.29A9.88 9.88 0 0 1 18 27.79Z"/><path fill="none" d="M0 0h36v36H0z"/></svg></NavLink>
            
        </div>
    );
}

export default LandingPage;