import React, { useEffect } from "react";

import MainNavbar from './MainNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'remixicon/fonts/remixicon.css'

export default function Header() {

    /* useEffect(function mount() {
        const navBar = document.querySelector("#mainNav");
        const hero = document.querySelector("#hero");

        const clsBtm = ["fixed-bottom", "border-top", "navbar-dark", "bg-dark"]
        const clsTop = ["fixed-top", "border-bottom", "navbar-light", "bg-white"]
        function onScroll() {
            const scroller = window.pageYOffset;
            if (scroller > 50) {
                navBar.classList.add(...clsTop);
                navBar.classList.remove(...clsBtm);
            } else {
                navBar.classList.remove(...clsTop);
                navBar.classList.add(...clsBtm);
                hero.style.display = "none";
            }
        }
        window.addEventListener("scroll", onScroll);
        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    },[]); */

    return (
        <>
            <MainNavbar />
        </>
    )
}