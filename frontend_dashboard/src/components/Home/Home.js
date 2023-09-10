import React from "react";
import Navbar from "../NavBar/NavBar";
import "./Home.css";

function Home() {
  return (
    <div className="bg-light-purple">
      <Navbar />

      <div className="container my-5">
        <div className="jumbotron bg-purple text-white rounded shadow-lg p-5">
          {" "}
          {/* Increased padding for more whitespace */}
          <h1 className="display-4 mb-4">Welcome to Dashboard Project!</h1>
          <p className="lead mb-4">
            This is a simple job hunting platform. Go to /profile to see your profile. Go to /search_companies to search for jobs.
          </p>
          <hr className="my-4 bg-light" />
          <div className="mt-4 d-flex justify-content-center">
            {" "}
            {/* Centered buttons */}
            <a
              className="btn btn-light btn-lg mr-4 shadow"
              href="/login"
              role="button"
            >
              Log In
            </a>
            <a
              className="btn btn-dark btn-lg shadow"
              href="/signup"
              role="button"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
