import React from "react";
import { HiOfficeBuilding } from "react-icons/hi"
import { IoIosBed } from "react-icons/io"
import { GiBathtub } from "react-icons/gi"
import { SlSizeFullscreen } from "react-icons/sl"

export const PropertyCard = (props) => {
    return (
        <div className="property-container h-[200px] overflow-clip ">
            <div className="property-item h-full flex border rounded-[8px] overflow-hidden">
                <img src={props.img} alt="" className="aspect-video" width={320} />
                <div className="property-description p-[15px] justify-between flex flex-col">
                    <div>
                        <h3 className="text-2xl font-bold">{props.name}</h3>
                        <h5 className="text-lg">{"Tower " + props.tower}</h5>
                        <div className="flex gap-[10px]">
                            <p className="flex items-center gap-[3px]"><HiOfficeBuilding />{props.type}</p>
                            <p className="flex items-center gap-[4px]"><IoIosBed />{props.bedroom}</p>
                            <p className="flex items-center gap-[4px]"><GiBathtub />{props.bathroom}</p>
                            <p className="flex items-center gap-[4px]"><SlSizeFullscreen />{props.size + ' sqm'}</p>
                            <p className="flex items-center gap-[4px]">|</p>
                            <p className="flex items-center gap-[4px]">{props.furnished}</p>
                        </div>
                        <p className="text-gray-400 font-light">{props.address}</p>
                    </div>
                    <h3 className="text-2xl font-bold items-end">{'IDR ' + props.price}</h3>
                </div>
            </div>
        </div>
    )
}