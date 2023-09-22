"use client"
// Next js
import Image from "next/image";
import Link from "next/link";

// React js
import { useState } from "react";

// Icons
import { AiOutlinePieChart, AiOutlineFile } from "react-icons/ai";
import { BsGrid, BsPerson } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { RiRotateLockLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

// Images
import profilePicture from "@images/mazlum_erkek.jpeg";
import timLogoTr from "@images/tim_logo_tr.png";

const navAddress = [
  {
    label: "MENÜ",
    address: [
      {
        label: "Eğitimler",
        href: "./",
        Icon: <AiOutlinePieChart></AiOutlinePieChart>,
      },
      {
        label: "Analiz",
        href: "./",
        Icon: <BsGrid></BsGrid>,
      },
      {
        label: "Raporlar",
        href: "./",
        Icon: <AiOutlineFile></AiOutlineFile>,
      },
      {
        label: "Profil",
        href: "./",
        Icon: <BsPerson></BsPerson>,
      },
      {
        label: "TİM'e Yaz",
        href: "./",
        Icon: <BiMessage></BiMessage>,
      },
    ],
  },
  {
    label: "TERCİHLER",
    address: [
      {
        label: "Yetkilendirme",
        href: "./",
        Icon: <BsPerson></BsPerson>,
      },
      {
        label: "Şifremi Değiştir",
        href: "./",
        Icon: <RiRotateLockLine></RiRotateLockLine>,
      },
      {
        label: "Gizlilik Politikası",
        href: "./",
        Icon: <FiSettings></FiSettings>,
      },
    ],
  },
];

export default function MNav() {
  const [selectedPage, setSelectedPage] = useState("Analiz")
  return (
    <div className="mNav">
      <div className="userAbout">
        {/* Profil Resmi */}
        <Image
          src={profilePicture}
          alt={"profile_picture"}
          className="userImg"
        ></Image>
        <div>
          {/* Kullanıcının Adı */}
          <p className="userName">Mazlum Erkek</p>
          {/* Kullanıcının İşi  */}
          <p className="userJob">Tedarik Zinciri Yöneticisi</p>
        </div>
      </div>
      {/* Navigasyonlar */}
      <div className="navigations">
        {navAddress.map((navigations, index) => (
          <div className="navTitle" key={index}>
            {navigations.label}
            {navigations.address.map((nav, index) => (
              <div key={index} className={selectedPage != nav.label ? "navButton" : "selectedNavButton"}>
                {nav.Icon}
                <Link href={"./"} className="">{nav.label}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Tim logosu */}
      <Image src={timLogoTr} alt={"tim_logo_tr"} className="timLogo"></Image>
    </div>
  );
}
