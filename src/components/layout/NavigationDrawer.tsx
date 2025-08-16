"use client";

import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { NavigationDrawerProps } from "@/types/navType";

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  setIsOpen,
  navLinks,
}) => {
  return (
    <>
      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black p-6 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="text-white mb-8"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#F6E9E9] text-body-lg leading-body font-[var(--font-weight-body)] hover:text-[#00FF66] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Login Button */}
          <Button className="mt-4 px-6 py-2 bg-[#00FF66] text-black rounded-full font-semibold text-sm hover:opacity-90 transition">
            Login
          </Button>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NavigationDrawer;
