import React from 'react';
import Header from "./components/header/Header";
import Tentang from "./components/tentang/Tentang";
import Portofolio from "./components/portofolio/Portofolio";
import Pendidikan from "./components/pendidikan/Pendidikan";
import Kontak from "./components/kontak/Kontak";
import "./app.scss";
import {useState} from 'react';
import Menu from './components/menu/Menu';


function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
           <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <div className="sections">
                <Tentang/>
                <Portofolio/>
                <Pendidikan/>
                <Kontak/>
           </div>
        </div>
    );
}

export default App;