import React from 'react'
import "./header.scss"

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <div className={"header " + (menuOpen && "active")}> 
                <div className="wrapper">
                    <div className="left">
                        <a href="#tentang">Portofolio Christian Nugroho</a>
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
        </div>
    )
}
