import Image from "next/image";
import CoverIMG from "../app/assets/CoverPhoto.png";
import { Button } from "./ui/button";
import "./styles/profile-hero.scss";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import {CldUploadWidget } from "next-cloudinary";
import axios from "axios";
import toast from "react-hot-toast";


function ProfileHero({ gamerData }: any) {
  const [cover, setCover] = useState();
  const [profileImage, setProfileImage] = useState();
  const [coverURL, setCoverURL]: any = useState();
  const [profileImageURL, setProfileImageURL]: any = useState();

  const handleCancel = () => {
    setProfileImageURL(null);
    setCoverURL(null);
  };

  useEffect(() => {
    setCover(gamerData?.banner);
    setProfileImage(gamerData?.profileImage);
  }, [gamerData]);

  const handleSubmit = async () => {
    try {
      const response = await axios.patch("https://kind-pear-puffer-tie.cyclic.cloud/api/user/editUserProfile", {
        profileImage: profileImageURL || profileImage,
        banner: coverURL || cover,
      },{
        headers:{ 'authorization': `${localStorage.getItem('authToken')}`}
      });
      setCover(coverURL || cover);
      setProfileImage(profileImageURL || profileImage);
      handleCancel()
      toast.success("Your Profile is Updated")
      
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  return (
    <div className="profile-hero">
      <div className="bg-cover">
        {!coverURL ? (
          <Image
            src={cover ? cover : CoverIMG}
            width={1600}
            height={300}
            alt="coverimg"
          />
        ) : (
          <Image src={coverURL} width={1600} height={300} alt="coverimg" />
        )}
      </div>
      <div className="flex items-center justify-between px-10 py-14 ">
        <div className="flex gap-5">
          {" "}
          <div className="text-center">
            <p>5</p>
            <h5>Requests</h5>
          </div>
          <div className="text-center">
            <p>45</p>
            <h5>Friends</h5>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-2 absolute bottom-10">
            <Avatar className="w-36 h-36">
              <AvatarImage
                src={profileImageURL ? profileImageURL : profileImage}
              />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>

            <div className="text-center text-sm ">
      
              <p>
                <b>{gamerData?.fullName}</b>
              </p>
              <p>{gamerData?.email}</p> <p>{gamerData?.userName}</p>
            </div>
          </div>
        </div>

        {!coverURL && !profileImageURL?( <div>
          <CldUploadWidget
            uploadPreset="dgbeplar"
            onSuccess={(response: any) =>
              setProfileImageURL(response.info.secure_url)
            }
            options={{
              maxFiles: 1,
            }}
          >
            {({ open }) => {
              function handleProfileClick(e: any) {
                e.preventDefault();
                open();
              }
              return (
                <Button variant={"outline"} onClick={handleProfileClick}>
                  Change Profile
                </Button>
              );
            }}
          </CldUploadWidget>

          <CldUploadWidget
            uploadPreset="dgbeplar"
            onSuccess={(response: any) =>
              setCoverURL(response.info.secure_url)
            }
            options={{
              maxFiles: 1,
            }}
          >
            {({ open }) => {
              function handleCoverClick(e: any) {
                e.preventDefault();
                open();
              }
              return (
                <Button className="text-white mx-4" onClick={handleCoverClick}>
                  Change Cover
                </Button>
              );
            }}
          </CldUploadWidget>
        </div>):(
          <div>                <Button variant={"outline"} onClick={handleSubmit}>
          Save
        </Button>
        <Button className="text-white mx-2" onClick={handleCancel}>
          Cancel
        </Button>
        </div>
        )}
      </div>
    </div>
  );
}

export default ProfileHero;
