import { BiMessageSquareCheck } from "react-icons/bi";
// import { HiOutlineLockOpen } from "react-icons/hi2"; use this with animation
// import { BiSolidMessageSquareCheck } from "react-icons/bi";use this when the message is checked
// import { NavLink } from "react-router-dom";

import DribbleImage from '../../assets/dribble-logo.png'

function JobBox() {
    return (
            <div className="border-[#D7D7D7] border-[1px] p-1 rounded-2xl max-w-80">
                <div className="bg-third-color flex flex-col gap-2 rounded-2xl p-3">
                    <div className="flex justify-between items-center">
                    <div className="px-4 py-2 bg-white rounded-3xl text-primary text-[0.9rem] font-[500]"> 29 Jan,2023</div>
                    <button className="p-3 flex items-center justify-center aspect-square rounded-full bg-white"><BiMessageSquareCheck className="text-[1.1rem] "/></button>
                </div>
                <div className="flex justify-between gap-8 items-center ">
                    <div className="flex flex-col">
                    <p className="text-[0.8rem] font-[450]">Dribble</p>
                    <p className="text-[1.5rem] font-[500]">Senior Motion Designer</p>
                    </div>
                    <img src={DribbleImage} className=" w-12 aspect-square rounded-full" alt="" />
                </div>
                <div>
                <button className="px-2 py-1 rounded-3xl border-light-text text-primary text-[0.8rem] border-[1px]">Full time</button>
                </div>
                </div>
                <div className="flex justify-between p-3 items-center">
                <div className="flex flex-col">
                    <p className="font-semibold">$260/hr</p>
                    <p className="text-light-text text-[0.8rem]">New York, NY</p>
                </div>
                <button className="text-white px-3 w-fit h-fit py-2 bg-primary border-[1px] border-primary rounded-3xl">Details</button>
                </div>
            </div>
    )
}

export default JobBox