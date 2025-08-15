"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import Button from "../ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "What is KlipAI", href: "#" },
    { label: "Send KlapAI", href: "#" },
    { label: "AI Agent", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Web3", href: "#" },
  ];

  return (
    <header className="sticky top-5 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 bg-black rounded-[15px]">
        {/* Logo */}
        <Link href="#">
          <Image
            src="/icons/brand.svg"
            alt="KlipAI Logo"
            width={99}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white text-sm font-medium hover:text-[#00FF66] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <Button className="hidden md:inline-flex px-6 py-2 bg-[#00FF66] text-black rounded-full font-semibold text-sm hover:opacity-90 transition">
          Login
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white text-base font-medium hover:text-[#00FF66] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full px-6 py-2 bg-[#00FF66] text-black rounded-full font-semibold text-sm hover:opacity-90 transition">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
