import React from 'react'
import "./tentang.scss"

export default function Tentang() {
    return (
        <div className="tentang" id="tentang">
            <div className="left">
                <div className="img-container">
                    <img className="foto" src="image/foto.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <h1>Tentang Saya</h1><br></br>
                <p>Nama saya Christian Nugroho Hamonangan. Saya memiliki keinginan yang besar untuk terus mempelajari
                    perkembangan di bidang teknologi informasi dan mencari pengalaman yang baru. Saat ini saya adalah mahasiswa
                    semester akhir Fakultas Ilmu Komputer dan Teknologi Informasi.
                </p>
            </div>
        </div>
    )
}
