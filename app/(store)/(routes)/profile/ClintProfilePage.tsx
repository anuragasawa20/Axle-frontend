"use client";
import React, { useEffect, useState } from "react";
import ProfileHero from "@/components/ProfileHero";
import ProfileTabs from "@/components/ProfileTabs";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


function ClintProfilePage() {

    const router = useRouter();
    const [gamerData, setGamerData] = useState(null);

    useEffect(() => {
        async function fetchProfileData() {
            try {
                const response = await axios.get('https://kind-pear-puffer-tie.cyclic.cloud/getUserByToken', {
                    headers: {
                        'authorization': `${localStorage.getItem('authToken')}`
                    }
                });
                console.log('Data:', response.data);
                setGamerData(response.data.user);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfileData();
    }, []);
  return (
    <div>
      <ProfileHero gamerData={gamerData}/>
      <ProfileTabs gamerData={gamerData}/>
    </div>
  );
}

export default ClintProfilePage;
