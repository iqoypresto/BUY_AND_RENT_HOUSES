import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="w-full bg-white overflow-hidden">
                <div className="flex justify-between max-w-screen-xl mx-auto items-center">
                    <div className="flex items-center gap-[20px]">
                        <Link to='/'><img src="https://cdn.pgimgs.com/hive-ui/static/v0.1.3/logo/rumah-horizontal-by-pg.svg" width="160px" alt="aw" /></Link>
                        <ul className="flex items-center py-[20px] gap-[20px]">
                            <li><Link to="/beli">Beli</Link></li>
                            <li><Link to="/beli">Disewa</Link></li>
                            <li><Link to="">Properti Baru</Link></li>
                            <li><Link to="">Direktori</Link></li>
                            <li><Link to="">Cari Agen</Link></li>
                            <li><Link to="">Panduan</Link></li>
                            <li><Link to="">Lainnya</Link></li>
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