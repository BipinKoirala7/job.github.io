import { RiMapPinRangeLine } from "react-icons/ri";
import { useState } from "react";

import EvenBtn from "./EvenBtn";

function JobPortalNavbarSlider() {
    const [SliderValue, SetSliderValue] = useState<string>('0')
    return (
        <div className="pl-6  py-2 flex items-center gap-4 min-w-[20%] w-full">
            <EvenBtn hoverTailwindColor="" isHoverEffectNeeded={false} icon={<RiMapPinRangeLine />} />
            <div className="flex flex-col gap-2 w-full">
                <p>Salary $0 - $10000000 {`( Value: ${SliderValue} )` }</p>
                <input className="w-full appearance-auto border-none outline-none accent-blue-500" type="range" name="salary-range" id="salary-range" max={1000000} min={0} step={10000} value={SliderValue} onChange={(e)=> SetSliderValue(e.target.value)} />
            </div>
        </div>
    )
}

export default JobPortalNavbarSlider