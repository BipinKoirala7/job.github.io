import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import EvenBtn from "./EvenBtn";
import FilterLabelComponent from "./FilterLabelComponent";
function Jobfilters() {
    return (
        <div className="flex flex-col gap-4 bg-secondary text-primary px-8 py-4">
            <div className="flex items-center justify-between">
                <p className="text-[1.1rem] font-semibold py-2 ">Filters</p>
                <EvenBtn hoverTailwindColor="hover:bg-first-color" isHoverEffectNeeded={true} icon={<MdOutlineKeyboardDoubleArrowLeft className="text-primary cursor-pointer"/>} />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[0.9rem] text-light-text">Working Schedule</p>
                <div className="flex flex-col gap-2">
                    <FilterLabelComponent id="full-time" name="Full time" />
                    <FilterLabelComponent id="part-time" name="Part Time" />
                    <FilterLabelComponent id="internship" name="Internship" />
                    <FilterLabelComponent id="project-work" name="Project work" />
                    <FilterLabelComponent id="volunteering" name="Volunteering" />
                </div>
                <div className="flex gap-2 flex-col">
                    <p className="text-[0.9rem] text-light-text">Employment type</p>
                    <FilterLabelComponent id="full-day" name="Full day" />
                    <FilterLabelComponent id="flexible-schedule" name="Flexible schedule" />
                    <FilterLabelComponent id="shift-work" name="Shift work" />
                    <FilterLabelComponent id="distant-work" name="Distant work" />
                    <FilterLabelComponent id="Shift-method" name="Shift method" />
                </div>
            </div>
        </div>
    )
}

export default Jobfilters