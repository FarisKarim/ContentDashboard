import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./components/Signup/Signup";
import ProtectedRoute from "./utils/ProtectedRoute";
import CompanyList from "./components/Company/CompanyList";
import JobOpeningList from "./components/JobOpenings/JobOpeningsList";
import CompanyDetail from "./components/Company/CompanyDetail/CompanyDetail";
import AdzunaJobSearch
 from "./components/Company/AdzunaJobSearch";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/companies" element={<CompanyList />} />
          <Route path = "/search_companies" element={<AdzunaJobSearch />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route
            path="/companies/:id/job_openings"
            element={<JobOpeningList />}
          />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
