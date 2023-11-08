"use client";

import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Home, Users, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "../app/assets/StoreLogo.png";
import { cn } from "@/lib/utils";
import "./styles/sidbar.scss"

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/store",
    color: "text-sky-500",
  },
  {
    label: "Games",
    icon: Gamepad2,
    href: "/games",
    color: "text-violet-500",
  },
  {
    label: "Friends",
    icon: Users,
    color: "text-pink-700",
    href: "/blog",
  },
  {
    label: "Admin",
    icon: Settings,
    href: "https://axle-admin.vercel.app/",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidbar-main">
      <div className="flex-1">
        <Link href="/store" className="flex items-center justify-center mb-8">
          <div className="relative">
            <Image alt="Logo" src={Logo} height={75}/>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "sidbar-link",
                pathname === route.href
                  ? "active-sidbar"
                  : ""
              )}
            >
              <div className={cn(
                "flex items-center flex-1 ",
                pathname === route.href
                  ? "active-color"
                  : ""
              )}>
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      Hello
    </div>
  );
};
