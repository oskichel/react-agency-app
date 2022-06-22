import React from "react";
import { NavLink } from 'react-router-dom';
import MyButton from "../MyButton/MyButton";
import logo from '../../assets/icons/logo.png'
import st from "./Header.module.css";

function Header() {


    return (
        <div className={st.header}>
            <div className={st.wrap}>
                <NavLink to={'/'} className={st.logo}><img src={logo}></img></NavLink>
                <nav className={st.navbar}>
                    <NavLink to={'/about'} className={st.menu}>About</NavLink>
                    <NavLink to={'/services'} className={st.menu}>Services</NavLink>
                    <NavLink to={'/pricing'} className={st.menu}>Pricing</NavLink>
                    <NavLink to={'/blog'} className={st.menu}>Blog</NavLink> 
                </nav>
                <MyButton className={st.button} >CONTACT</MyButton>
            </div>
        </div>
    );
}

export default Header;