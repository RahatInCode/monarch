"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="font-black tracking-widest text-lg">MONARCH</div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-xs">
            Performance footwear for the streets and the stadiums. Designed in Dhaka. Worn worldwide.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline underline-offset-4" href="/products">
                Shop
              </Link>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Follow</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Instagram · X · TikTok</div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 dark:text-slate-400 py-5 border-t border-black/5 dark:border-white/10">
        © {new Date().getFullYear()} MONARCH — All rights reserved.
      </div>
    </footer>
  );
}

