"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[#252525] text-[#BBA98D] py-16 px-6 lg:px-12"
    >
      {/* Top row: description and navigation links */}
      <div className="flex flex-col lg:flex-row">
        {/* Left: agency description */}
        <div className="flex-1">
          <p className="text-[16px] md:text-[20px] lg:text-[35px] font-semibold text-[#D5B77A] leading-[1.1]">
            Qube is a performance-first UA marketing
            <br />
            agency helping apps, games, and digital
            <br />
            brands scale across Japan and Asia.
          </p>
          <p className="mt-5 lg:mt-10 text-[15px] lg:text-[20px]">
            Built in Tokyo.
            <br />
            Scaling across Asia.
          </p>
        </div>

        {/* Right: primary links, legal links, and social icons */}
        <div className="flex-1 flex justify-between md:justify-around text-[17px] md:text-[20px] mt-12 lg:mt-0">
          {/* Column 1: main site links */}
          <ul className="space-y-2">
            <li>
              <Link href="#hero" className="hover:text-[#D5B77A]">
                About us
              </Link>
            </li>
            <li>
              <Link href="#proven-results" className="hover:text-[#D5B77A]">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#full-funnel-growth" className="hover:text-[#D5B77A]">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="https://quest.0xqube.xyz/en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D5B77A]"
              >
                Quest Platform
              </Link>
            </li>
          </ul>

          {/* Column 2: legal links */}
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D5B77A]"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>

            {/* Mobile-only social icons */}
            <div className="space-y-2 block lg:hidden">
              <li>
                <Link
                  href="https://x.com/yourprofile"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center space-x-2"
                >
                  <span>X</span>
                  <ArrowUpRight className="w-7 h-7" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/yourchannel"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center space-x-2"
                >
                  <span>Telegram</span>
                  <ArrowUpRight className="w-7 h-7" />
                </Link>
              </li>
            </div>
          </ul>

          {/* Column 3: desktop-only social icons */}
          <ul className="space-y-2 hidden lg:block">
            <li>
              <Link
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center space-x-2"
              >
                <span>X</span>
                <ArrowUpRight className="w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center space-x-2"
              >
                <span>Telegram</span>
                <ArrowUpRight className="w-7 h-7" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom row: logo and copyright */}
      <div className="mx-auto mt-10 flex flex-col lg:flex-row items-end justify-between">
        {/* Logo */}
        <Image
          src="/logo-text.svg"
          alt="Qube logo"
          width={0}
          height={0}
          unoptimized
          className="w-full lg:w-1/2 h-auto"
        />
        {/* Copyright */}
        <p className="text-[14px] lg:text-[27px]">
          © {new Date().getFullYear()} Qube. All rights reserved.
        </p>
      </div>

      {/* Decorative background illustration (torii gate) */}
      <Image
        src="/footer/torii-gate.svg"
        alt="Torii Gate"
        width={0}
        height={0}
        className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-auto max-h-[400px] opacity-[0.1]"
      />
    </footer>
  );
}
