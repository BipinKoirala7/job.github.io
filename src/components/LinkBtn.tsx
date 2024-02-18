type LinkBtn = {
    name: string,
    url:string
}

import { NavLink } from "react-router-dom"

import { getRandomTailwindString } from "../utils"

function LinkBtn(props: LinkBtn) {
    return (
        <NavLink to={props.url} className={({isActive})=>  isActive ? ` px-4 py-2 border-b-[2px] border-b-first-color text-secondary`: `px-4 py-2 rounded-lg ${getRandomTailwindString(6,1)} hover:text-primary`}
        >{props.name}</NavLink>
    )
}

export default LinkBtn