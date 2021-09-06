import React from 'react'
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " +(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#tentang">Tentang Saya</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portofolio">Portofolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#pendidikan">Pendidikan</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#kontak">Kontak</a>
                </li>
            </ul>
        </div>
    )
}
