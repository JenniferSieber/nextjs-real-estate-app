"use client";

// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log('useffect')
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-600 px-1">Wild Rose</span>
            <span className="text-slate-700">Estates</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input 
            type="text" 
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            {/* <FaSearch className="text-slate-600" /> */}
            <FaSearch />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden md:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden md:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <h2>Signin here </h2>
          <h2>Signout here commented out</h2>
          {/* <SignedIn>
            <UserButton />
          </SignedIn>
          <SignOut>
            <Link href="/sign-in">
              <li className="hidden md:inline text-slate-700 hover:underline">
                Sign In
              </li>
            </Link>
          </SignOut> */}
        </ul>
      </div>
    </header>
  );
}
