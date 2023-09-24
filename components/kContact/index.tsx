// next js
import Link from "next/link";
// react js
import React from "react";
import { IconType } from "react-icons";

interface KContactProps {
  icon: React.ReactNode;
  href: string,
}

export default function KContact(props: KContactProps) {
  const { icon, href } = props;
  return <Link href={href}>{icon}</Link>;
}
