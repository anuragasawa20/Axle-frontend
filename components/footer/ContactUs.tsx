"use client";
import "../styles/dialog.scss";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactIMG from "../../app/assets/ContactIMG.jpg";
import { useForm } from '@formspree/react';
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";

function ContactUs() {
  const closeDialogRef:any = useRef(null);
  const [state, handleSubmit] = useForm("mbjvlqyz");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await handleSubmit(e);
      closeDialogRef.current.click();
      toast.success("We will Contact you Soon");
    } catch (error:any) {
      toast.error(error)
    }

    setIsLoading(false);
  };
  return (
    <Dialog>
      <DialogClose  ref={closeDialogRef}/>
      <DialogTrigger>
        <a>Contact Us</a>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <div className="dialog-comp">
              <div>
                <Image src={ContactIMG} alt="avatar" />
              </div>
              <div className="dialog-comp-form">
                <div>
                  <h1>
                    CONTACT <span>US</span>
                  </h1>
                  <form className="dialog-form" onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <textarea placeholder="Your Message" rows={4} required></textarea>
                    <Button variant={"landing"} size={"landing"} type="submit" disabled={isLoading}>
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

export default ContactUs;
