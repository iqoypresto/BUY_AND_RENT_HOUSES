import React from "react";
import Navbar from "../../components";

export const Beli = () => {

    return (
        <>
            <Navbar />
            <div className="content">
                <div className="max-w-screen-xl mx-auto">
                    <div>Home {'>'} Beli</div>
                    <div>
                        <form className="flex" action="">
                            <input className="border h-[30px] p-5 outline-none rounded-[10px]" type="text" placeholder="Cari" />
                            <button>a</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}