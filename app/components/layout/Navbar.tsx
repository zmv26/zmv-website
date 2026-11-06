
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="relative z-50 border-b border-slate-200/80 bg-white"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMobileMenu();
        }
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">

        {/* Main Navigation Bar */}
        <div className="flex min-h-[76px] items-center justify-between gap-6 py-3">

          {/* ZMV Branding */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
            aria-label="ZMV Group homepage"
          >
            <Image
              src="/images/zmv-group-mark.webp"
              alt="ZMV Group Corp."
              width={248}
              height={76}
              priority
              className="h-12 w-auto max-w-[190px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-7"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-[#24344d] transition-colors duration-200 hover:text-[#b18b20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b88b45] focus-visible:ring-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact CTA */}
          <Link
            href="/#contact"
            className="hidden shrink-0 items-center gap-2 rounded-sm bg-[#b88b45] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#9e7334] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b88b45] focus-visible:ring-offset-2 lg:inline-flex"
          >
            Get In Touch
            <ArrowRight size={16} aria-hidden="true" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-sm p-2 text-[#24344d] transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b88b45] lg:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="zmv-mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X size={25} aria-hidden="true" />
            ) : (
              <Menu size={25} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          id="zmv-mobile-navigation"
          aria-label="Mobile navigation"
          className={`border-t border-slate-200 pb-5 pt-3 lg:hidden ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex flex-col gap-1">

            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="flex items-center justify-between rounded-sm px-3 py-3 text-sm font-medium text-[#24344d] transition-colors hover:bg-slate-50 hover:text-[#b18b20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b88b45]"
              >
                {item.label}
                <ArrowRight
                  size={15}
                  className="text-[#b88b45]"
                  aria-hidden="true"
                />
              </Link>
            ))}

            {/* Mobile Contact CTA */}
            <Link
              href="/#contact"
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-[#b88b45] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#9e7334] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b88b45] focus-visible:ring-offset-2"
            >
              Get In Touch
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

          </div>
        </nav>

      </div>
    </header>
  );
}
