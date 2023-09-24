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

export default function kargakarga() {
  // states
  const [cookieUpdate, setCookieUpdate] = useState(true);
  return (
    <main className="kargakarga">
      <KNav />
      {cookieUpdate && (
        <KCookie
          func={function () {
            setCookieUpdate(false);
          }}
        />
      )}
      <KOurServices />
      <KStaff />
      <KStartTheProject />
      <KFaq/>
      <KLetsStart/>
    </main>
  );
}
