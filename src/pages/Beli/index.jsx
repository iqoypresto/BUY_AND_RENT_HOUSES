import React, { useEffect, useState } from "react";
import { Navbar, Filter, FilterModal, PropertyCard } from "../../components";

export const Beli = () => {
    const [propertiData, setPropertiData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [searchCity, setSearchCity] = useState('')
    const getData = async () => {
        try {
            const res = await fetch('https://sheet.best/api/sheets/9b36cbc6-cb51-4c3d-b3dc-e9891a644f88')
            setPropertiData(await res.json())
            console.log(propertiData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {openModal &&
                <FilterModal closeModal={setOpenModal} searchCity={setSearchCity} />
            }
            <Navbar />
            <div className="max-w-screen-xl mx-auto text-xs mt-[10px]">
                Home {'>'} Beli
            </div>
            <Filter closeModal={setOpenModal} />
            <div className="max-w-screen-xl mx-auto my-[20px]">
                <div className="mb-[15px]">
                    <h5>{propertiData.length} Properti Dijual di Indonesia</h5>
                    <h5>Ditemukan <a href="" className="hover:text-red-300 text-red-500">Buat Pengingat</a></h5>
                </div>
                <div className="space-y-[15px]">
                    {
                        propertiData.filter((properti) => {
                            return searchCity.toLowerCase() === '' ? properti : properti.city.toLowerCase().includes(search)
                        }).map((properti) => (
                            <PropertyCard 
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