import { LuSearch } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import JobPortalNavbarSlider from "./JobPortalNavbarSlider";
import FilterNavigationBox from "./FilterNavigationBox";

function JobPortalNavbar() {
    const JobsOptions = ['Computer Science', 'Software Engineer', 'Information Technology', 'Machine Learning', 'Artificial Intelligence']
    const LocationOptions = ['Kathmandu','Pokhara','Remote','New York','California','Shenzen','Paris','London']
    const ExperienceOptions = ['Fresher','1 Year','2 Year','3 Year','4 Year','5 Year','10 Year','15year','20 Year']
    const EarningsTypeOptions = ['Per Month','Per Year','Per Hour']
    return (
        <div className="grid grid-cols-job-filter-grid-column w-full items-center bg-primary px-6 py-4">
            <FilterNavigationBox icon={<LuSearch />} holdName="Job Type" Options={JobsOptions}/>
            <FilterNavigationBox icon={<IoLocationOutline />} holdName="Location" Options={LocationOptions}/>
            <FilterNavigationBox icon={<MdOutlineWorkHistory />} holdName="Experience" Options={ExperienceOptions}/>
            <FilterNavigationBox icon={<MdOutlineAttachMoney />} holdName="Per Month" Options={EarningsTypeOptions}/>
            <JobPortalNavbarSlider  />
        </div>
    )
}

export default JobPortalNavbar