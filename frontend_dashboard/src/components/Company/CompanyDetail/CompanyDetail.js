// CompanyDetail.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../CompanyList.css";
const CompanyDetail = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/dashboard/companies/${id}/`);
      setCompany(response.data);
    };
    fetchCompany();
  }, [id]);

  if (!company) return <div>Loading...</div>;

  return (
    <div className="cl-container">
      <h2 className="cl-title">Company Details</h2>
      <Card className="cl-company-card">
        <div className="cl-card-header">
          <Typography variant="h5" component="div" className="cl-company-title">
            {company.name}
          </Typography>
        </div>
        <CardContent className="cl-card-content">
          <Typography variant="subtitle1" color="textSecondary">
            {company.industry}
          </Typography>
          <Typography variant="body2">{company.overview}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDetail;
