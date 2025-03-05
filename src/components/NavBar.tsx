
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component mounts only on the client side
  }, []);

  if (!isMounted) return null; // Avoid rendering during SSR

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/heart-gaurd-icon.png"
            alt="Heart Health Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-3xl font-semibold text-blue-600 transition-all duration-300 hover:text-blue-800">
            HeartGuard
          </span>
        </Link>

        {/* Hamburger icon for mobile view */}
        <button onClick={toggleMenu} className="md:hidden text-blue-600 hover:text-blue-800 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex md:space-x-8 ${isOpen ? 'flex flex-col items-center space-y-6 bg-blue-50 p-6 w-full absolute top-16 left-0 md:relative md:flex-row md:space-y-0 md:bg-transparent md:top-0 md:w-auto md:p-0' : 'hidden'}`}>
          <NavLink href="/" label="Home" />
          <NavLink href="/news" label="Health News" />
          <NavLink href="/articles" label="Articles" />
          <NavLink href="/tips" label="Tips" />
          <NavLink href="/recipes" label="Healthy Recipes" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string, label: string }) {
  return (
    <Link href={href} className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out">
      {label}
    </Link>
  );
}
