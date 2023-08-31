import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const response = await axios.get('http://127.0.0.1:8000/dashboard/companies/');
            setCompanies(response.data);
        };

        fetchCompanies();
    }, []);

    return (
        <div>
            <h2>Companies</h2>
            {companies.map((company) => (
                <div key={company.id}>
                    <h3>{company.name}</h3>
                    <p>{company.industry}</p>
                    <p>{company.overview}</p>
                </div>
            ))}
        </div>
    );
};

export default CompanyList;
