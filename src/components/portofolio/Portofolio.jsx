import React from 'react';
import "./portofolio.scss";
import ImageSlider from '../slider/ImageSlider';
import { SliderData } from '../slider/SliderData';

export default function Portofolio() {

    return (
        <div className="portofolio" id="portofolio">
            <div className="left">
                <ImageSlider slides={SliderData}/>
            </div>
            <div className="right">
                <h1>Portofolio</h1>
                <p>Salah satu project yang pernah saya kerjakan adalah Website Psikotes Online untuk proses rekrutmen karyawan di sebuah perusahaan. 
                Website ini dibangun dengan menggunakan framework ReactJS untuk front-end dan Node.js untuk back-end.
                Database yang digunakan website tersebut adalah MongoDB.
                Website ini terdiri dari 3 bagian, yaitu pengisian data diri, tes kepribadian (pilihan) dan tes kecerdasan (isian).</p>
            </div>
        </div>
    )
}
