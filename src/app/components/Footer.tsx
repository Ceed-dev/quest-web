"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FooterT = {
  description1: string;
  description2: string;
  description3: string;
  builtInTokyo: string;
  scalingAcrossAsia: string;
  nav: {
    about: string;
    caseStudies: string;
    services: string;
    questPlatform: string;
    termsOfService: string;
    privacyPolicy: string;
  };
};

export default function Footer({ t }: { t: FooterT }) {
  return (
    <footer
      id="footer"
      className="relative bg-[#252525] text-[#BBA98D] pt-16 pb-5 px-6 lg:px-12"
    >
      {/* Top row: description and navigation links */}
      <div className="flex flex-col lg:flex-row">
        {/* Left: agency description */}
        <div className="flex-1">
          <p className="text-[14px] md:text-[18px] lg:text-[28px] font-semibold text-[#D5B77A] leading-[1.1]">
            {t.description1}
            <br />
            {t.description2}
            <br />
            {t.description3}
          </p>
          <p className="mt-5 lg:mt-10 text-[12px] lg:text-[18px]">
            {t.builtInTokyo}
            <br />
            {t.scalingAcrossAsia}
          </p>
        </div>

        {/* Right: primary links, legal links, and social icons */}
        <div className="flex-1 flex justify-between md:justify-around text-[15px] md:text-[18px] mt-12 lg:mt-0">
          {/* Column 1: main site links */}
          <ul className="space-y-2">
            <li>
              <Link href="#hero" className="hover:text-[#D5B77A]">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="#proven-results" className="hover:text-[#D5B77A]">
                {t.nav.caseStudies}
              </Link>
            </li>
            <li>
              <Link href="#full-funnel-growth" className="hover:text-[#D5B77A]">
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link
                href="https://quest.0xqube.xyz/en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D5B77A]"
              >
                {t.nav.questPlatform}
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
                {t.nav.termsOfService}
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D5B77A]"
              >
                {t.nav.privacyPolicy}
              </Link>
            </li>

            {/* Mobile-only social icons */}
            <div className="space-y-2 block lg:hidden">
              <li>
                <Link
                  href="https://x.com/0xQube"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center space-x-2 hover:text-[#D5B77A]"
                >
                  <span>X</span>
                  <ArrowUpRight className="w-7 h-7" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.com/invite/0xqube"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center space-x-2 hover:text-[#D5B77A]"
                >
                  <span>Discord</span>
                  <ArrowUpRight className="w-7 h-7" />
                </Link>
              </li>
            </div>
          </ul>

          {/* Column 3: desktop-only social icons */}
          <ul className="space-y-2 hidden lg:block">
            <li>
              <Link
                href="https://x.com/0xQube"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center space-x-2 hover:text-[#D5B77A]"
              >
                <span>X</span>
                <ArrowUpRight className="w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.com/invite/znnZh4ZDdK"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center space-x-2 hover:text-[#D5B77A]"
              >
                <span>Discord</span>
                <ArrowUpRight className="w-7 h-7" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom row: logo and copyright */}
      <div className="mx-auto mt-10 lg:mt-30 flex flex-col lg:flex-row items-end justify-between">
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
        <p className="text-[10px] lg:text-[25px]">
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
