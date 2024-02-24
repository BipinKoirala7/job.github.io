import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

import { NavLink } from "react-router-dom";
import EvenBtn from "./EvenBtn";
import LinkBtn from "./LinkBtn";

function HomeNavbar() {
    return (
        <div className=" bg-primary border-b-[1px] border-border-color w-full grid grid-cols-main-navbar-grid items-center pt-4 px-8 max-w-[100%]">
            <NavLink to={'/'} className="main-title text-[1.5rem] px-2 py-2">Jagire Nepali</NavLink>
            <div className="flex gap-8 w-[60%] px-4">
                <LinkBtn url="/" name="Home" />
                <LinkBtn url="/find-job" name="Find Job"/>
                <LinkBtn url="upload-job" name="Upload Job"/>
                <LinkBtn url="/faqs" name="FAQs"/>
            </div>
            <div className="flex justify-between text-[1.4rem] pl-4 gap-2 border-l-[1px]  border-border-color">
                <NavLink to={'/account'} className="border-[1px] btn-transition cursor-pointer rounded-full p-2 hover:bg-second-color hover:text-primary">
                    <CiUser className="rounded-full aspect-square" />
                </NavLink>
                <EvenBtn icon={<CiSettings  />} isHoverEffectNeeded={true} hoverTailwindColor="hover:bg-third-color"/>
                <EvenBtn icon={ <IoIosNotificationsOutline />}isHoverEffectNeeded={true} hoverTailwindColor="hover:bg-fourth-color"/>
            </div>
        </div>
    )
}

export default HomeNavbar