"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./Navbar";
import SliderFotos from "./SliderFotos";
import Carousel from "./Carousel";
export default function Home() {
  const DATA = [
    { image: '/foto1.jpg' },
    { image: '/foto2.jpg' },
    { image: '/foto3.jpg' },
    { image: '/foto4.jpg' },
  ]
  return (
    <div>
      <NavBar/>
      <div className="grid grid-cols-3">
      <div className="w-fit mx-auto col-start-3 ">
      <Carousel data={DATA}/>
      </div>
      </div>
    </div>
  );
}
