import React, { useEffect, useState } from "react";
import axios from "axios";
function FbProfile(props) {
  const [fbprofile, setFbprofile] = useState("");
  const getfbProfile = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/fbprofile", {
        withCredentials: true,
      });
      console.log(data);
      setFbprofile(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getfbProfile();
  }, []);
  return (
    <div>
      <h1>Profile Pages</h1>
    
      <div className="profile">
         <br></br>
      <img
          src={fbprofile.picture}
          alt="img"
          className="img"
        />
        <h1>{fbprofile.name}</h1>
        <h2>{fbprofile.email}</h2>
        <h3>{fbprofile.facebookId}</h3>
        <h3>{fbprofile.createdAt}</h3>
        <h3>{fbprofile.updatedAt}</h3>
      </div>
    </div>
  );
}

export default FbProfile;
