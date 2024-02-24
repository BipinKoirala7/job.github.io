
import JobBox from "./JobBox";
function TotalJob() {
    return (
        <div className="grid grid-cols-3 gap-6 px-0 overflow-y-auto max-h-[40rem]">
            <JobBox />
            <JobBox />
            <JobBox />
        </div>
    )
}

export default TotalJob