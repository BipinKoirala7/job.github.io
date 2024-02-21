import JobPortalNavbar from "./Job/JobFilter/JobPortalNavbar"
import Jobfilters from "./Job/JobFilter/Jobfilters"

import { LuSettings2 } from "react-icons/lu";
// import { BiSolidMessageSquareCheck } from "react-icons/bi";use this when the message is checked
import TotalJob from "./Job/TotalJob";


function FindJob() {
  return (
    <div className="grid grid-cols-job-filter-grid-column grid-rows-job-filter-gird-row gap-2">
      <div className="row-span-1 col-start-1 col-end-6">
        <JobPortalNavbar />
      </div>
      <div className="row-start-2 row-end-auto col-start-1 col-end-2">
        <Jobfilters />
      </div>
      <div className="bg-secondary col-start-2 col-end-6 row-start-2 row-end-auto flex flex-col gap-6 px-6 py-2 text-primary">
        <div className="flex justify-between items-center w-[100%] px-6">
            <div className="flex items-center gap-6">
              <p className="font-semibold text-[1.5rem]">Recommended Jobs</p>
              <p className="border-light-text border-[1px] px-2 py-1 rounded-3xl">387</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-light-text text-[0.9rem]">Sort By:</p>
            <p className="text-[0.9rem] font-semibold">Last Updated</p>
            <LuSettings2 />
          </div>
        </div>

        <TotalJob />
      </div>
    </div>
  )
}

export default FindJob