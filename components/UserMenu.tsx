"use client"

import { LogOut,User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuLabel, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import toast from 'react-hot-toast';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
function UserMenu() {

    const [Name, setName] = useState(''); 

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
        toast.success("Logout Successful")
    };

    useEffect(() => {
        async function fetchProfileData() {
            try {
                const response = await axios.get('https://kind-pear-puffer-tie.cyclic.cloud/getUserByToken', {
                    headers: {
                        'authorization': `${localStorage.getItem('authToken')}`
                    }
                });
                console.log('Data:', response.data);
                const fullName = response.data.user.fullName;
                const parts = fullName.split(' ');
                const first = parts[0];
                setName(first);
            } catch (error) {
                localStorage.removeItem('authToken');
                window.location.reload();
                toast.error("Session Expired")
                console.error('Error:', error);
            }
        }
        
        fetchProfileData();
    }, []);




    return (
        <div>
            <DropdownMenu >
                <DropdownMenuTrigger>
                    <div className='flex items-center gap-2 font-bold text-sm'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                    <p>{Name || 'Name'}</p>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className='p-2 text-sm'>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem ><Link href={"/profile"} className='flex gap-2'><User/>Profile</Link></DropdownMenuItem>
                    <DropdownMenuItem className='flex gap-2' onClick={handleLogout}><LogOut/>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserMenu