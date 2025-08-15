"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Constants for card dimensions and spacing
const CARD_WIDTH = 350;
const GAP = 64;

type ProvenResultsT = {
  heading: string;
  description: string;
};

type Lang = "en" | "ja";

// Represents a single statistic to display on a carousel card
type Stat = {
  /** Descriptive label for the statistic (e.g., "User Onboarded") */
  label: string;
  /** Display value for the statistic (e.g., "4.5K+") */
  value: string;
};

type LocalizedStat = Record<Lang, Stat>;

/**
 * Defines the shape of a carousel item, including an optional stats array.
 */
export type Item = {
  /** Unique identifier for each carousel item */
  id: number;
  /** Title text displayed on the card */
  title: string;
  /** URL or path to the icon image for this card */
  iconSrc: string;
  /** Optional array of statistics to render on the card */
  stats?: LocalizedStat[];
};

export default function ProvenResults({
  t,
  lang,
}: {
  t: ProvenResultsT;
  lang: "en" | "ja";
}) {
  // Ref to carousel container for centering calculations
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Calculate horizontal offset to center active card
  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    setOffset((containerWidth - CARD_WIDTH) / 2);
  }, []);

  // Items for carousel
  const items: Item[] = [
    {
      id: 1,
      title: "SuperWalk",
      iconSrc: "/carousel/superwalk.svg",
      stats: [
        {
          en: { label: "Watchlist & Follower Growth in 2 days", value: "10K+" },
          ja: {
            label: "2日間でのウォッチリスト＆フォロワー増加",
            value: "1万+",
          },
        },
        {
          en: { label: "NFT Trading Volume", value: "23M+" },
          ja: { label: "NFT取引量", value: "2,300万+" },
        },
        {
          en: { label: "Transactions", value: "42M+" },
          ja: { label: "取引数", value: "4,200万+" },
        },
      ],
    },
    {
      id: 2,
      title: "Spark",
      iconSrc: "/carousel/spark.jpg",
      stats: [
        {
          en: { label: "Community Members", value: "50,000+" },
          ja: { label: "コミュニティメンバー数", value: "5万+" },
        },
        {
          en: { label: "Twitter Followers", value: "100,000+" },
          ja: { label: "Twitterフォロワー数", value: "10万+" },
        },
        {
          en: { label: "Contents Generated", value: "80+" },
          ja: { label: "生成コンテンツ数", value: "80+" },
        },
        {
          en: { label: "Regions", value: "Japan, China, Global" },
          ja: { label: "地域", value: "日本、中国、グローバル" },
        },
      ],
    },
    {
      id: 3,
      title: "Arbitrum",
      iconSrc: "/carousel/arbitrum.svg",
      stats: [
        {
          en: { label: "User Onboarded", value: "4.5K+" },
          ja: { label: "登録ユーザー数", value: "4,500+" },
        },
        {
          en: { label: "Impressions", value: "250K+" },
          ja: { label: "インプレッション", value: "25万+" },
        },
        {
          en: { label: "Total PRs", value: "40+" },
          ja: { label: "総PR数", value: "40+" },
        },
      ],
    },
    {
      id: 4,
      title: "Bitget",
      iconSrc: "/carousel/bitget.png",
      stats: [
        {
          en: { label: "Acquired KYC Users", value: "3,000+" },
          ja: { label: "獲得KYCユーザー数", value: "3千+" },
        },
        {
          en: { label: "Total Impression", value: "1.2M+" },
          ja: { label: "トータルインプレッション数", value: "120万+" },
        },
        {
          en: { label: "Contents Generated", value: "32" },
          ja: { label: "生成コンテンツ数", value: "32" },
        },
        {
          en: { label: "Regions", value: "Japan, SEA(PH&VN), India" },
          ja: {
            label: "地域",
            value: "日本、東南アジア（フィリピン＆ベトナム）、インド",
          },
        },
      ],
    },
    {
      id: 5,
      title: "Tokyobeast",
      iconSrc: "/carousel/tokyobeast.svg",
      stats: [
        {
          en: { label: "#1 Trending", value: "on Dextool 3 Times in a Month" },
          ja: { label: "トレンド1位", value: "Dextoolで月3回" },
        },
        {
          en: { label: "50k+ Participants", value: "in 5 Social Events" },
          ja: {
            label: "参加者数5万人以上",
            value: "5回のソーシャルイベントで",
          },
        },
        {
          en: { label: "200K+", value: "Social User Growth" },
          ja: { label: "20万+", value: "ソーシャルユーザー増加" },
        },
      ],
    },
    {
      id: 6,
      title: "Okto",
      iconSrc: "/carousel/okto.jpg",
      stats: [
        {
          en: { label: "Referral LTV", value: "300,000" },
          ja: { label: "リファラルLTV", value: "30万" },
        },
        {
          en: { label: "Total Reach", value: "120,000+" },
          ja: { label: "総リーチ数", value: "12万+" },
        },
        {
          en: { label: "Content Generated", value: "70+" },
          ja: { label: "生成コンテンツ数", value: "70+" },
        },
        {
          en: {
            label: "Region",
            value:
              "Japan and Hyperliquid KOLs. This one is very strong cause 300k total money deposited to OKTO wallet from our KOLs referral links.",
          },
          ja: {
            label: "地域",
            value:
              "日本とHyperliquidのKOL。KOLのリファラルリンク経由でOKTOウォレットに30万ドルが入金された。",
          },
        },
      ],
    },
    {
      id: 7,
      title: "Delabs",
      iconSrc: "/carousel/delabs.png",
      stats: [
        {
          en: { label: "Perp Trading Volume in 2 Weeks", value: "$1.2B+" },
          ja: { label: "2週間の先物取引量", value: "$12億+" },
        },
        {
          en: {
            label:
              "Ranked #1 during key phases, surpassing dYdX, with Korea leading global traffic",
            value: "",
          },
          ja: {
            label:
              "重要期間中にdYdXを上回り1位、韓国が世界的なトラフィックを牽引",
            value: "",
          },
        },
      ],
    },
  ];

  // Carousel index state and handlers
  const [index, setIndex] = useState(3);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(items.length - 1, i + 1));

  return (
    <section
      id="proven-results"
      className="bg-[#252525] py-16 px-6 lg:px-12 min-h-screen flex flex-col"
    >
      {/* Section heading and subheading */}
      <div className="mb-12">
        <h2 className="text-[35px] md:text-[45px] font-semibold text-[#D5B77A]">
          {t.heading}
        </h2>
        <p className="mt-2 text-[17px] md:text-[22px] text-[#BBA98D]">
          {t.description}
        </p>
      </div>

      {/* Carousel wrapper */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full h-[500px] flex-1 flex items-center rounded-3xl border border-[#D5B77A] md:border-none shadow-[0_0_25px_rgba(213,183,122,0.6)] md:shadow-none bg-[#1C1C1C] md:bg-transparent"
      >
        {/* Motion container slides left/right based on index */}
        <motion.div
          className="flex items-center gap-16"
          animate={{ x: offset - index * (CARD_WIDTH + GAP) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, i) => {
            const isActive = i === index;
            return (
              <div
                key={item.id}
                className={`
                  flex-shrink-0
                  w-[350px] h-[500px]
                  p-6
                  rounded-3xl
                  transition-all
                  ${
                    isActive
                      ? "bg-[#1C1C1C] scale-105 md:border md:border-[#D5B77A] md:shadow-[0_0_25px_rgba(213,183,122,0.6)]"
                      : "bg-[#1A1A1A] opacity-40 md:border md:border-gray-300"
                  }
                `}
              >
                {/* Card content: icon, title and optional stats */}
                <div className="h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={90}
                    height={90}
                    className="rounded-3xl"
                    unoptimized
                  />

                  {/* Title */}
                  <h3 className="text-[#D5B77A] text-[40px] font-semibold">
                    {item.title}
                  </h3>

                  {/* Optional stats list */}
                  {item.stats && (
                    <ul className="text-center space-y-3">
                      {item.stats.map((stat) => (
                        <li key={stat[lang].label}>
                          <span className="text-[20px] text-[#BBA98D]">
                            {stat[lang].label}
                          </span>
                          <span className="block font-semibold text-[18px] text-[#F7E1D0]">
                            {stat[lang].value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-lg bg-[#D5B77A]/20 hover:bg-[#D5B77A] text-white text-2xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-lg bg-[#D5B77A]/20 hover:bg-[#D5B77A] text-white text-2xl"
        >
          ›
        </button>
      </div>
    </section>
  );
}
