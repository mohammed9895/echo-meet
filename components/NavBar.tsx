import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <nav className=" flex-between z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/logo.svg" alt="Echo Meet" width={32} height={32} />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          ECHO
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
}

export default NavBar;
