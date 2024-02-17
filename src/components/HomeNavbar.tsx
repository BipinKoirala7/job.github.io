import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HomeNavbar() {
    const location = useLocation()
    console.log(location)
    return (
        <div className="p-4 border-b-[1px] border-border-color w-full flex items-center justify-evenly">
            <NavLink to={'/'} className="main-title text-[1.2rem]">Jagire Nepali</NavLink>
            <div className="flex gap-8 w-[60%] border-r-[1px] px-4 border-border-color">
                <NavLink to={'/'} className={({isActive})=>  isActive ? ` px-4 py-2 border-b-[2px] border-b-first-color text-secondary`: `px-4 py-2 rounded-lg hover:bg-first-color hover:text-primary`}
                >Home</NavLink>
                <NavLink to={'/find-job'} className={({isActive})=>  isActive ? ` px-4 py-2 border-b-[2px] border-b-first-color text-secondary`: `px-4 py-2 rounded-lg hover:bg-second-color hover:text-primary`}>Find Job</NavLink>
                <NavLink to={'/upload-job'} className={({isActive})=>  isActive ? ` px-4 py-2 border-b-[2px] border-b-first-color text-secondary`: `px-4 py-2 rounded-lg hover:bg-third-color hover:text-primary`}>Upload Job</NavLink>
                <NavLink to={'/faqs'} className={({isActive})=>  isActive ? ` px-4 py-2 border-b-[2px] border-b-first-color text-secondary`: `px-4 py-2 rounded-lg hover:bg-fourth-color hover:text-primary`}>FAQs</NavLink>
            </div>
            <div className="flex justify-between text-[1.4rem] px-4 py-2 gap-2">
                <NavLink to={'/account'} className="border-[1px] btn-transition cursor-pointer rounded-full p-2 hover:bg-first-color hover:text-primary">
                    <CiUser className="rounded-full aspect-square" />
                </NavLink>
                <div className="border-[1px] btn-transition cursor-pointer rounded-full p-2 hover:bg-second-color hover:text-primary">
                    <CiSettings className="rounded-full aspect-square" />
                </div>
                <div className="border-[1px] btn-transition cursor-pointer rounded-full p-2 hover:bg-third-color hover:text-primary">
                    <IoIosNotificationsOutline className="rounded-full aspect-square" />
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar