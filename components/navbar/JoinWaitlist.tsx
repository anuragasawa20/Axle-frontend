'use client';

import React, { useRef } from 'react';
// import "../../styles/dialog.scss";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import WaitlistHero from "../../app/assets/WaitlistHero.jpg";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";

function JoinWaitlist() {
    const closeDialogRef:any = useRef(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.emailAddress.value;

        try {
            const response = await axios.post("/api/waitlist", {
                name: `${firstName} ${lastName}`,
                email,
            });
            closeDialogRef.current.click();
            console.log("Response:", response.data);
            toast.success("Thanks for your Interest");
            
            
        } catch (error) {
            console.error("Error:", error);
            toast.error("This Email is Already Used");
        }
    };

    return (
        <Dialog>
           <DialogClose  ref={closeDialogRef}/>
            <DialogTrigger>
                <Button variant="landing" size="landing">
                    Join Waitlist
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <div className="dialog-comp">
                            <div>
                                <Image src={WaitlistHero} alt="avatar" />
                            </div>
                            <div className="dialog-comp-form">
                                <div>
                                    <h1>
                                        Join the <span>Axle</span> Waitlist
                                    </h1>
                                    <form className="dialog-form" onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First name"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name"
                                        />
                                        <input
                                            type="email"
                                            name="emailAddress"
                                            placeholder="Email Address"
                                            required
                                        />
                                        <Button variant={"landing"} size={"landing"} type="submit">
                                            Submit
                                        </Button>
                                       
                                            
                                      
                                    </form>
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default JoinWaitlist;
