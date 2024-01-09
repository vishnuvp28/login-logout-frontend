import React, { useEffect, useState } from "react";
import axios from "axios";
function GithubProfile(props) {
  const [ghprofile, setGhprofile] = useState("");
  const getghprofile = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/ghprofile", {
        withCredentials: true,
      });
      console.log(data);

      setGhprofile(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getghprofile();
  }, []);
  return (
    <div>
      <h1>Profile Pages</h1>
    
      <div className="profile">
         <br></br>
      <img
          src={ghprofile.picture}
          alt="img"
          className="img"
        />
        <h1>{ghprofile.name}</h1>
        <h2>{ghprofile.email}</h2>
        <h3>{ghprofile.githubId}</h3>
        <h3>{ghprofile.createdAt}</h3>
        <h3>{ghprofile.updatedAt}</h3>
      </div>
    </div>
  );
}

export default GithubProfile;
