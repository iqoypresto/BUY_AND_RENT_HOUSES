import React, { useEffect, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { IoSearchOutline } from "react-icons/io5"

export const Filter = ({closeModal}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="w-full shadow-md py-[10px] sticky top-[64px] bg-white">
                <form className="max-w-screen-xl mx-auto flex gap-[15px]" action="" onSubmit={handleSubmit}>
                    <div className="w-full flex items-center border border-gray-400 rounded-[8px]  py-2 px-4 overflow-hidden">
                        <input list="lokasi" type="text" className="w-full pe-[10px] outline-none" placeholder="Cari Lokasi" />
                        <IoSearchOutline size='20px' color="gray" />
                    </div>
                    <button className="border border-gray-400 py-2 px-4 rounded-[8px] flex items-center gap-[5px]" onClick={() => {
                        closeModal(true);
                    }}>
                        <HiOutlineAdjustmentsHorizontal size='20px' />
                        <p>Filter</p>
                    </button>
                </form>
            </div>
        </>
    )
}