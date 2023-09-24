"use client";
// React js
import { useState } from "react";
import { useCookies } from "react-cookie";
// Components
import KCookie from "@/components/kCookie";
import KNav from "@/components/kNav";
import KOurServices from "@/components/kOurServices";
import KStaff from "@/components/kStaff";
import KStartTheProject from "@/components/kStartTheProject";
import KFaq from "@/components/kFaq";
import KLetsStart from "@/components/kLetsStart";
import KFooter from "@/components/kFooter";
import KCustomerFeed from "@/components/kCustomerFeed";

export default function Kargakarga() {
  const isCookieSet = document.cookie
    .split("; ")
    .some((item) => item.startsWith("Cookie1="));

  // states
  const [cookieUpdate, setCookieUpdate] = useState(true);
  return (
    <main className="kargakarga">
      <KNav />
      {!isCookieSet && cookieUpdate && (
        <KCookie
          func={function () {
            setCookieUpdate(false);
          }}
        />
      )}
      <KOurServices />
      <KStaff />
      {/* <KCustomerFeed/> */}
      <KStartTheProject />
      <KFaq />
      <KLetsStart />
      <KFooter />
    </main>
  );
}
