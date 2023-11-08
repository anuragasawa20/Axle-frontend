'use client';

import { MobileSidebar } from "@/components/MobSideBar";
import { Search, Bell } from 'lucide-react';
import "./styles/store-navbar.scss"
import UserMenu from "./UserMenu";
import UserLogin from "./UserLogin";
import { useEffect, useState } from "react";
import axios from 'axios';

// import PlugConnect from '@psychedelic/plug-connect';


const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    setIsAuthenticated(!!authToken);
  }, []);

  let plug = async () => {
    // Canister Ids
    const nnsCanisterId = 'ysb3v-aiaaa-aaaan-qelga-cai'

    // Whitelist
    const whitelist = [
      nnsCanisterId,
    ];

    // Host
    const host = "https://mainnet.dfinity.network";

    // Callback to print sessionData
    const onConnectionUpdate = () => {
      console.log(window.ic.plug.sessionManager.sessionData)
    }
    // Make the request
    try {
      const publicKey = await window.ic.plug.requestConnect({
        whitelist,
        host,
        onConnectionUpdate,
        timeout: 50000
      });
      const wallet_id = window.ic.plug.principalId;
      console.log(wallet_id);
      const response = await axios.patch("https://kind-pear-puffer-tie.cyclic.cloud/api/user/editUserProfile", {
        wallet_address: wallet_id,
      }, {
        headers: { 'authorization': `${localStorage.getItem('authToken')}` }
      });
      console.log(response.data);
      console.log(`The connected user's public key is:`, publicKey);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      {/* <PlugConnect
        whitelist={['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']}
        onConnectCallback={() => console.log("Some callback")}
      /> */}
      <div className="flex">
        <div className="search-input">
          <Search className="search-icon" />
          <input placeholder="Search here" />

        </div>
      </div>
      <div className="flex w-full justify-end items-center gap-2">
        <button onClick={plug} className="rounded-xl bg-green-400 ">connect to plug</button>
        <Bell />

        {isAuthenticated ? <UserMenu /> : <UserLogin />}
      </div>
    </div>
  );
};

export default Navbar;
