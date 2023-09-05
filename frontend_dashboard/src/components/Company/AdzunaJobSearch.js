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
      <h2 className="adzuna-title">Search Jobs</h2>

      <div className="adzuna-input-card">
        <input
          type="text"
          className="adzuna-input"
          placeholder="Description (e.g., Javascript Developer)"
          value={description} // Updated from search
          onChange={(e) => setDescription(e.target.value)} // Updated from setSearchTerm
        />
        <input
          type="text"
          className="adzuna-input"
          placeholder="Enter country code (e.g., gb, us)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className="adzuna-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <div>Loading...</div>}

      {isSearchSuccessful && (
        <div>
          <h3 className="adzuna-job-list-header">Job Results:</h3>
          <ul className="adzuna-job-list">
            {jobs.map((job, index) => (
              <li className="adzuna-job-item" key={index}>
                <h2 className="adzuna-job-title">{job.title}</h2>
                <p className="adzuna-job-description">{job.description}</p>
                <a className="adzuna-job-link"
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Job Details
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
