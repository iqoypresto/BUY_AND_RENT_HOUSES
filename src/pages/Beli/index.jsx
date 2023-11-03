import React, { useEffect, useState } from "react";
import { Navbar, Filter, FilterModal, PropertyCard } from "../../components";

export const Beli = () => {
    const [propertiData, setPropertiData] = useState([])
    const [search, setSearch] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const getData = async () => {
        try {
            const res = await fetch('https://sheet.best/api/sheets/3ac41fc1-f633-4405-b7f5-79664c4c6abe')
            setPropertiData(await res.json())
        } catch (error) {
            console.log(error)
        }
    }
    console.log(search)
    useEffect(() => {
        getData()
    }, )

    return (
        <>
            {openModal &&
                <FilterModal closeModal={setOpenModal} />
            }
            <Navbar />
            <div className="max-w-screen-xl mx-auto text-xs mt-[10px]">
                Home {'>'} Beli
            </div>
            <Filter closeModal={setOpenModal} searchFilter={setSearch} />
            <div className="max-w-screen-xl mx-auto my-[20px]">
                <div className="mb-[15px]">
                    <h5>{propertiData.length} Properti Dijual di Indonesia</h5>
                    <h5>Ditemukan <a href="" className="hover:text-red-300 text-red-500">Buat Pengingat</a></h5>
                </div>
                <div className="space-y-[15px]">
                    {
                        propertiData.filter((properti) => {
                            return search.toLowerCase() === '' ? properti : properti.city.toLowerCase().includes(search)
                        }).map((properti, i) => (
                            <PropertyCard key={i}
                            name       ={properti.name} 
                            address    ={properti.address} 
                            tower      ={properti.tower} 
                            type       ={properti.property_type.replace(/^./, properti.property_type[0].toUpperCase())}
                            bedroom    ={properti.bedroom} 
                            bathroom   ={properti.bathroom} 
                            size       ={parseInt(properti.size)} 
                            furnished  ={properti.furnished.replace(/^./, properti.furnished[0].toUpperCase())}
                            price      ={
                                properti.price.length === 9 ?
                                properti.price.replace(/(\d{3})(\d{3})(\d{3})/, '$1,$2,$3') : 
                                properti.price.length === 10 ?
                                properti.price.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '$1,$2,$3,$4') :
                                properti.price.length === 11 ?
                                properti.price.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1,$2,$3,$4') :
                                properti.price.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1,$2,$3,$4')

                            } 
                            img        ={properti.galleries}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}