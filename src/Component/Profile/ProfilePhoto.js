import React from "react";
import photo from "./ahlemphoto.jpg";
const ProfilePhoto = () => {
  return (
    <div className="pho">
      <img className="im" src={photo} alt="phot" />
    </div>
  );
};

export default ProfilePhoto;