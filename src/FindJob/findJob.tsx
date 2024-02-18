import JobPortalNavbar from "../components/JobPortalNavbar"
import Jobfilters from "../components/Jobfilters"
// import Jobfilters from "../components/Jobfilters"


function FindJob() {
  return (
    <div className="h-full">
      <div>
        <JobPortalNavbar />
        <Jobfilters />
      </div>
      <div>
      </div>
    </div>
  )
}

export default FindJob