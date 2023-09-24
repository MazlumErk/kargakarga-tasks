// React js
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import KContact from "../kContact";

// Icons

const contacts = [
  { icon: <AiOutlineInstagram />, href: "" },
  { icon: <CiLinkedin />, href: "" },
  { icon: <CiTwitter />, href: "" },
];

export default function KFooter() {
  return (
    <div className="kFooter">
      <div className="contacts">
        {contacts.map((contact, index) => (
          <KContact icon={contact.icon} href={contact.href} key={index} />
        ))}
      </div>
      <p>
        Üretken insanların tanışıp, proje üretebildiği açık inovasyon merkezi.{" "}
      </p>
    </div>
  );
}
