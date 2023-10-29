import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="w-full bg-white overflow-hidden">
                <div className="flex justify-between max-w-screen-xl mx-auto items-center">
                    <div className="flex items-center gap-[20px]">
                        <img src="https://cdn.pgimgs.com/hive-ui/static/v0.1.3/logo/rumah-horizontal-by-pg.svg" width="160px" alt="aw" />
                        <ul className="flex items-center py-[20px] gap-[20px]">
                            <li><Link to="/">Beli</Link></li>
                            <li><Link to="/about">Disewa</Link></li>
                            <li><Link to="/contact">Properti Baru</Link></li>
                            <li><Link to="/contact">Direktori</Link></li>
                            <li><Link to="/contact">Cari Agen</Link></li>
                            <li><Link to="/contact">Panduan</Link></li>
                            <li><Link to="/contact">Lainnya</Link></li>
                        </ul>
                    </div>
                    <div>
                        <button className="border">Login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;