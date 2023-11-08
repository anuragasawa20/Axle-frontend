import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";

function AboutProfile({ aboutData }: any) {
  const [editAbout, setEditAbout] = useState(false);
  const [editedAboutData, setEditedAboutData]:any = useState();
  const handleEditClick = () => {
    setEditAbout(!editAbout);
    setEditedAboutData(aboutData);
  };

  useEffect(() => {
    setEditedAboutData(aboutData);
  },[aboutData])


  const handleSubmit = async () => {
    try {
      const response = await axios.patch("https://kind-pear-puffer-tie.cyclic.cloud/api/user/editUserProfile", {
        bio: editedAboutData,
      },{
        headers:{ 'authorization': `${localStorage.getItem('authToken')}`}
      });

      setEditAbout(!editAbout);
      toast.success("Your Profile is Updated")
      
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  return (
    <div>
      {!editAbout ? (
        <div>
          <p>{editedAboutData}</p>
          <div className=" flex justify-end">
            <Button className="text-white mt-2" onClick={handleEditClick}>
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <textarea value={editedAboutData} rows={5} style={{ width: "100%" }} onChange={(e) => setEditedAboutData(e.target.value)} />
          <div className=" flex justify-end">
            <Button
              className="text-white mt-2 mr-3"
              variant={"outline"}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button className="text-white mt-2" onClick={handleEditClick}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutProfile;
