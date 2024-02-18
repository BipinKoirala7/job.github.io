type FilterNavigationBox = {
    icon: JSX.Element,
    holdName: string,
    Options:string[]
}

import { useState } from "react";
import EvenBtn from "./EvenBtn"
import { TiArrowSortedDown } from "react-icons/ti";
function FilterNavigationBox(props: FilterNavigationBox) {
    const [IsOpen, SetIsOpen] = useState(false)
    const [Choice, SetChoice] = useState(props.holdName)
    function handleFilterClick() {
        SetIsOpen(prev => !prev)
    }
    function handleOptionsClick(choice:string) {
        SetChoice(choice)
    }
    return (
        <div className="relative border-r-[1px] border-border-color p-1">
            <div onClick={handleFilterClick} className=" px-2 py-2 text-[1rem] flex items-center gap-2 btn-transition rounded-md hover:bg-border-color cursor-pointer">
                <EvenBtn isHoverEffectNeeded={false} hoverTailwindColor="" icon={props.icon}/>
                <div className="flex w-full justify-between items-center">
                    <p className="line-clamp-1">{ Choice }</p>
                    <TiArrowSortedDown className={ `btn-transition ${IsOpen ? 'rotate-0':'rotate-180'}` } />
                </div>
            </div>
                {IsOpen &&
                    <div className="absolute top-[120%] bg-primary p-4 flex flex-col gap-2 rounded-lg w-[120%] left-[-10%] border-[3px] border-border-color  ">
                        {props.Options.map((item =>
                            <button onClick={() => handleOptionsClick(item)} className="px-4 py-2 border-[1px] rounded-md border-border-color text-[0.9rem] hover:bg-border-color btn-transition bg-primary" type="button">{item}</button>
                        ))}
                    </div>
                }
        </div>
    )
}

export default FilterNavigationBox