import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import Hero from "../../assets/hero-banner.jpg"
import Handphone from "../../assets/2022_icon_index.svg"
import LangkahImg from "../../assets/terangi-langkah.png"

export const Home = () => {

    return (
        <>
            <Navbar />
            <div>
                <div className="bg-gray-200 justify-center flex">
                    <img className="w-full max-w-screen-xl" src={Hero} alt="" />
                </div>
                    <div className="relative">
                        <div className="w-full top-[-100px] absolute space-y-12">
                            <section className="bg-slate-900 w-[550px] rounded-[20px] mx-auto bg-opacity-[75%] py-6 px-10  space-y-4">
                                <div className="mx-auto w-fit bg-white flex rounded-[25px] overflow-hidden font-bold p-[1px]">
                                    <p className="py-2 px-8 bg-red-500 text-white rounded-[25px]">Beli</p>
                                    <p className="py-2 px-8">Sewa</p>
                                </div>
                                <div className="mx-auto">
                                    <form className="flex relative" action="">
                                        <input className="w-full  h-[50px] p-5 outline-none rounded-[15px]" type="text" placeholder="Cari" />
                                        <Link to='/beli'><button className="absolute right-0 h-full bg-red-500 hover:bg-red-400 transition-all duration-[0.25s] text-white px-5 rounded-e-[15px]">Cari</button></Link>
                                    </form>
                                </div>
                                <div className="mx-auto w-fit flex gap-[20px] text-white">
                                    <div>
                                        <p>Semua Residential</p>
                                    </div>
                                    <div>
                                        <p>Harga</p>
                                    </div>
                                    <div>
                                        <p>Kamar Tidur</p>
                                    </div>
                                </div>
                            </section>
                            <section className="max-w-screen-xl w-full mx-auto grid grid-cols-2 gap-y-5 gap-x-8">
                                <h1 className="text-4xl font-medium">Arah Menuju Rumah</h1>
                                <h1 className="text-4xl font-medium">Mari Kita Mulai</h1>
                                <div className="grid grid-rows-2 gap-8">
                                    <div className="grid grid-cols-5 bg-red-500 text-white p-8">
                                        <div className="col-span-4">
                                            <h3 className="text-3xl">Rumah.com Indonesia Property Market Report Q2 2023</h3>
                                            <button className="bg-white text-red-500 py-2 px-5 my-4 rounded-[8px]">Selengkapnya</button>
                                        </div>
                                        <div>
                                            <img src={Handphone} alt="" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="bg-gray-800 p-8">
                                            <p className="text-2xl text-white">Baca Cerita inspiratif para pencari hunian</p>
                                            <button className="bg-red-500 text-white py-2 px-5 my-4 rounded-[8px]">Cerita Rumah</button>
                                        </div>
                                        <div className="bg-red-300 p-8">
                                            <p className="text-2xl">Simak sentimen pencari hunian di Indonesia</p>
                                            <button className="bg-red-500 text-white py-2 px-5 my-4 rounded-[8px]">CSS H1 2023</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-[20px] overflow-hidden">
                                    <img src={LangkahImg} alt="" />
                                </div>
                            </section>
                            <footer className="h-[5px]">
                            </footer>
                        </div>
                    </div>
                </div>
        </>
    )
}