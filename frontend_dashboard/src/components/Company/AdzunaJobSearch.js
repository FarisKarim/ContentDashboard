import React, { useState } from "react";
import axios from "axios";
import "./AdzunaJobSearch.css";

const AdzunaJobSearch = () => {
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("us");
  const [isSearchSuccessful, setIsSearchSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]); // State to store job results

  // PUTTING IN NO COUNTRY CAUSES AN ERROR! FIX THIS

  const handleSearch = async () => {
    setLoading(true);
    setIsSearchSuccessful(false);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/dashboard/adzuna-jobs/?country=${country}&description=${description}`
      );
      console.log("Response:", response.data.results);

      if (response.data && response.data.results) {
        setJobs(response.data.results); // Save job results
        setIsSearchSuccessful(true);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };
  return (
    <div className="adzuna-container">
      <h2 className="adzuna__title">Search Adzuna Jobs</h2>
      <input
        className="adzuna__input"
        type="text"
        placeholder="Search for jobs..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="adzuna__input"
        type="text"
        placeholder="Enter country code (e.g., gb, us)..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button className="adzuna__button" onClick={handleSearch}>
        Search
      </button>

      {loading && <div>Loading...</div>}

      {isSearchSuccessful && (
        <div>
          <h3 className="adzuna__job-title-heading">Job Results:</h3>
          <ul className="adzuna__job-list">
            {jobs.map((job, index) => (
              <li className="adzuna__job-item" key={index}>
                <h4 className="adzuna__job-title">{job.title}</h4>
                <p className="adzuna__job-description">{job.description}</p>
                <a
                  href={job.redirect_url}
                  className="adzuna__job-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default AdzunaJobSearch;
