"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import logo from "../public/assets/images/logo.svg";
import Profile from "../assets/images/grid.svg";

const Nav = () => {
  const isUserLoggedIn = true;
  const [provides, setProviders] = useState(null);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setProvider()
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image width={30} height={30} alt="logo image" src={logo} />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div>
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image src={Profile} width={40} height={40} alt="Profile image" />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
