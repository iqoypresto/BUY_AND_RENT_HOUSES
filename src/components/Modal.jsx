import React from "react";
import { GrFormClose } from "react-icons/gr"

export const FilterModal = ({ closeModal }) => {
    return (
        <>
            <div className="modal-background fixed backdrop-brightness-50 w-full h-full z-50 flex items-center">
                <div className="modal-container w-[780px] mx-auto bg-white rounded-[15px]">
                    <header className="py-[10px] pb-0 shadow-lg">
                        <div className="px-[10px] flex items-center justify-between mb-[15px]">
                            <h5 className="font-medium">Filter</h5>
                            <button className="text-2xl" onClick={() => {
                                closeModal(false)
                            }}><GrFormClose /></button>
                        </div>
                        <div className="grid grid-cols-2 font-medium">
                            <button className="border-b-2 py-[10px] border-red-400">
                                <h5>Beli</h5>
                            </button>
                            <button className="border-b-2 py-[10px] border-gray-400 text-gray-400 hover:text-black hover:border-red-400">
                                <h5>Sewa</h5>
                            </button>
                        </div>
                    </header>
                    <form className="p-[10px]">
                        <div>
                            <h5 className="font-medium">Harga</h5>
                            <div className="grid grid-cols-2 gap-[15px]">
                                <div className="flex flex-col">
                                    <label htmlFor="">Minimum</label>
                                    <input className="border" type="number" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Minimum</label>
                                    <input className="border" type="number" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-medium">Kamar Tidur</h5>
                        </div>
                        <div>
                            <h5 className="font-medium">Kamar Mandi</h5>
                        </div>
                        <div>
                            <h5 className="font-medium">Luas Bangunan</h5>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}