"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

  return (
    <div className="max-w-[90%] mx-auto border-b sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <nav className="flex justify-between items-center mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Link href="/">
            <Image
              src="/e-book.png"
              alt="logo"
              width={100}
              height={70}
              priority
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-600 font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-black transition border-2 border-gray-700 px-2 py-1 rounded-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-books"
              className="hover:text-black transition border-2 border-gray-700 px-2 py-1 rounded-full"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="hover:text-black transition border-2 border-gray-700 px-2 py-1 rounded-full"
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Guest Buttons */}
          {!user && (
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              >
                <Link href="/signin">Sign In</Link>
              </Button>

              <Button
                size="sm"
                variant="bordered"
                className="border-blue-600 text-blue-600"
              >
                <Link href="/signup">Register</Link>
              </Button>
            </div>
          )}

          {/* User Section */}
          {user && (
            <div className="flex gap-3 items-center">
              <h2>Hello, {user?.name}</h2>

              <Avatar size="sm">
                <Avatar.Image
                  alt="User"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                size="sm"
                variant="solid"
                className="bg-red-500 text-white hover:bg-red-600"
              >
                Sign Out
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden pb-4 px-2">
          <ul className="flex flex-col gap-3 text-gray-600 font-semibold">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-books"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
