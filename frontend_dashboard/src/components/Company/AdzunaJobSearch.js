import React, { useState } from "react";
import axios from "axios";
import "./AdzunaJobSearch.css";


const AdzunaJobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("us"); 
  const [isSearchSuccessful, setIsSearchSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);  // State to store job results

// PUTTING IN NO COUNTRY CAUSES AN ERROR! FIX THIS

  const handleSearch = async () => {
    setLoading(true);
    setIsSearchSuccessful(false); 
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/dashboard/adzuna-jobs/?country=${country}`
      );
      
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
    <div className="cl-container">
      <h2 className="cl-title">Search Adzuna Jobs</h2>
      <div>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter country code (e.g., gb, us)..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>

      {loading && <div>Loading...</div>}

      {isSearchSuccessful && 
        <div>
          <h3>Job Results:</h3>
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>{job.title}</li> // Assuming the job object has a 'title' field
            ))}
          </ul>
        </div>}
    </div>
  );
};

export default AdzunaJobSearch;
