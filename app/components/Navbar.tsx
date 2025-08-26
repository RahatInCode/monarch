"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, PackagePlus } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40",
        scrolled ? "shadow-sm border-b border-black/5 dark:border-white/10" : "",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="font-black tracking-widest text-xl sm:text-2xl">
          MONARCH
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
          <Link href="/products" className="hover:opacity-80 transition-opacity">
            Shop
          </Link>
          <Link href="/about" className="hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity">
            Contact
          </Link>

          {isSignedIn && (
            <Link
              href="/my-products"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 dark:border-white/15 px-3 py-2 text-xs sm:text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <PackagePlus className="size-4" /> My Products
            </Link>
          )}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton>
                <span className="inline-flex items-center cursor-pointer gap-2 rounded-xl border border-slate-300/80 dark:border-white/15 px-3 py-2 text-xs sm:text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                  Login
                </span>
              </SignInButton>
              <SignUpButton>
                <span className="inline-flex items-center gap-2 cursor-pointer rounded-xl border border-slate-300/80 dark:border-white/15 px-3 py-2 text-xs sm:text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                  Sign Up
                </span>
              </SignUpButton>
            </>
          )}

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-3 py-2 text-xs sm:text-sm font-semibold hover:opacity-90 transition"
          >
            <ShoppingCart className="size-4" /> Shop
          </Link>
        </div>
      </div>
    </div>
  );
}





