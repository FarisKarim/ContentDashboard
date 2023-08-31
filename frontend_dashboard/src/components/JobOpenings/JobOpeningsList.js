import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobOpeningList = () => {
  const { id: companyId } = useParams();
  const [jobOpenings, setJobOpenings] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const jobResponse = await axios.get(
          `http://127.0.0.1:8000/dashboard/job_openings/?company=${companyId}`
        );
        setJobOpenings(jobResponse.data);

        if (jobResponse.data.length) {
          setCompanyName(jobResponse.data[0].company.name);
        } else {
          const companyResponse = await axios.get(
            `http://127.0.0.1:8000/dashboard/companies/${companyId}/`
          );
          setCompanyName(companyResponse.data.name);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobOpenings();
  }, [companyId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h2>Job Openings for {companyName}</h2>
      {jobOpenings.length ? (
        jobOpenings.map((job) => (
          <div key={job.id} style={{ marginBottom: "20px" }}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <a
              href={job.external_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        ))
      ) : (
        <p>No job openings available at the moment for {companyName}.</p>
      )}
    </div>
  );
};

export default JobOpeningList;
