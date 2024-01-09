import React, { useEffect, useState } from "react";
import axios from "axios";
function Profile(props) {
  const [profile, setProfile] = useState("");
  const getProfile = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/profile", {
        withCredentials: true,
      });
      console.log(data);
      setProfile(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="profile">
      <h1>Profile Pages</h1>
    
      <div className="profile">
         <br></br>
      <img
          src={profile.picture}
          alt="img"
          className="img"
        />
        <h1>{profile.name}</h1>
        <h2>{profile.email}</h2>
        <h3>{profile.googleId}</h3>
        <h3>{profile.createdAt}</h3>
        <h3>{profile.updatedAt}</h3>
      </div>
    </div>
  );
}

export default Profile;
