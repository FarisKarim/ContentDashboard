import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import NavBar from "../NavBar/NavBar";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const AuthToken = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/dashboard/user-profile/", {
        headers: {
          Authorization: `Token ${AuthToken}`,
        },
      })
      .then((response) => {
        setUserProfile(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user profile:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user profile.</div>;

  return (
    <div>
      <NavBar />
      <div className="profile-container">
        <div className="profile-header">
          {userProfile.profile_pic && (
            <img
              src={userProfile.profile_pic}
              alt="Profile"
              className="profile-pic"
            />
          )}
          <h1>
            {userProfile.first_name} {userProfile.last_name}
          </h1>
          {userProfile.website && (
            <a
              href={userProfile.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          )}
        </div>
        <div className="profile-content">
          <div className="email">
            <strong>Email:</strong> {userProfile.email}
          </div>
          <div className="bio">
            <strong>Bio:</strong> {userProfile.bio}
          </div>
          <div className="joined">
            <strong>Joined:</strong>{" "}
            {new Date(userProfile.date_joined).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
