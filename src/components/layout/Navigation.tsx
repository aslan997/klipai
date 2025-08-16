"use client";
import React, { useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { NavType } from "@/types/navType";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavType[] = [
    { label: "What is KlipAI", href: "#" },
    { label: "Send KlapAI", href: "#" },
    { label: "AI Agent", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Web3", href: "#" },
  ];

  return (
    <>
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
              className="text-[#F6E9E9] text-body-sm lg:text-body-lg leading-body font-[var(--font-weight-body)] hover:text-[#00FF66] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Login */}
        <Button className="hidden md:inline-flex px-6 py-2 bg-[#00FF66] text-black rounded-full font-semibold text-sm hover:opacity-90 transition">
          Login
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F6E9E9]"
          onClick={() => setIsOpen(true)}
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
      <NavigationDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navigation;
