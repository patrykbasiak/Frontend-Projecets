import React, { useState, UseEffect, useEffect } from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => setJobs(data), []);

  const filterFunction = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (languages) tags.push(...languages);
    if (tools) tags.push(...tools);

    return filters.every((filter) => tags.includes(filter));
  };
  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const clearFilters = () => {
    setFilters([]);
  };
  const filteredJobs = jobs.filter(filterFunction);

  return (
    <>
      <header className="bg-teal-500 mb-12 bg-cover bg-center">
        <img
          className="w-full"
          src="./images/bg-header-desktop.svg"
          alt="bg-image"
        />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <>
            <div className="relative flex bg-white shadow-md m-4 p-6 mb-16 -my-24 mx-10 z-10 rounded font-bold">
              {filters.map((filter) => (
                <span
                  className="cursor-pointer mr-4 rounded text-teal-500 bg-teal-100 p-2 lg:mb-0"
                  onClick={() => handleFilterClick(filter)}
                >
                  ✖ {filter}
                </span>
              ))}
              <button
                onClick={clearFilters}
                className="font-bold text-gray-700 ml-auto"
              >
                Clear
              </button>
            </div>
          </>
        )}
        {jobs.length === 0 ? (
          <p>Jobs are fatching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </>
  );
}
export default App;
