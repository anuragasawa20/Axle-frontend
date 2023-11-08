'use client';

import React, { useRef, useState } from 'react';
import "./styles/dialog.scss";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginHero from "../app/assets/LoginHero.jpg";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AiOutlineGoogle } from "react-icons/ai";

function UserLogin() {
    const closeDialogRef:any = useRef(null);
    const [showLogin, setShowLogin] = useState(true);
    
    const handleTabToggle = () => {
        setShowLogin(!showLogin);
    };
    const renderLoginForm = () => {
        const handleLoginSubmit = async (e:any) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            try {
                const response = await axios.post("https://kind-pear-puffer-tie.cyclic.cloud/login", {
                    email,
                    password,
                });
                const authToken = response.data.token;
                localStorage.setItem('authToken', authToken);
                closeDialogRef.current.click();
                toast.success("Login Successfull");
                window.location.reload();
            }catch (error:any) {
                toast.error(error.response.data.error);
            }
        };
        return (
            <div>
                <h1>
                    <span>Axle</span> Login
                </h1>
                <form className="dialog-form" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <Button variant={"landing"} size={"landing"} type="submit">
                        Login
                    </Button>

                    <h4 className='text-center'>OR</h4>

                    <div className='flex justify-between p-3 border-2 border-primary items-center text-xl text-white'>
                        <div><AiOutlineGoogle className="text-3xl"/></div>
                        <div>Continue with Google</div>
                        <div></div>
                    </div>
                </form>
                <p className='text-center text-white my-2'>
                    Don't have an account?
                    <span className="tab-toggle text-primary mx-1" onClick={handleTabToggle}>
                       Sign Up
                    </span>
                </p>
            </div>
        );
    };

    const renderSignupForm = () => {
                const handleSignupSubmit = async (e:any) => {
            e.preventDefault();
            const fullName = e.target.fullName.value;
            const userName = e.target.userName.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            try {
                const response = await axios.post("https://kind-pear-puffer-tie.cyclic.cloud/register", {
                    fullName,
                    userName,
                    email,
                    password,
                });
                toast.success("Signup Done Now you can Login");
                handleTabToggle()
            }catch (error:any) {
                toast.error(error.response.data.error);
            }}
        return (
            <div >
                <h1>
                    Sign Up
                </h1>
                <form className="dialog-form" onSubmit={handleSignupSubmit}>
                <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        required
                    />
                                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <Button variant={"landing"} size={"landing"} type="submit">
                        Sign Up
                    </Button>

                    <h4 className='text-center'>OR</h4>

                    <div className='flex justify-between p-3 border-2 border-primary items-center text-xl text-white'>
                        <div><AiOutlineGoogle className="text-3xl"/></div>
                        <div>Continue with Google</div>
                        <div></div>
                    </div>
                </form>
                <p className='text-center text-white my-2'>
                    Already have an account? 
                    <span className="tab-toggle text-primary mx-1" onClick={handleTabToggle}>
                         Login
                    </span>
                </p>
            </div>
        );
    };

    return (
        <Dialog>
            <DialogClose ref={closeDialogRef}/>
            <DialogTrigger>
                <Button variant="landing" size="lg">
                    {showLogin ? 'Login' : 'Sign Up'}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription >
                        <div className="dialog-comp">
                            <div>
                                <Image src={LoginHero} alt="avatar" />
                            </div>
                            <div className="dialog-comp-form">
                                {showLogin ? renderLoginForm() : renderSignupForm()}
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default UserLogin;