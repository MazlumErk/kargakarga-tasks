// Next js
import Image from "next/image";

// Images
import green_earth from "@images/green_earth.png";

export default function MTitle() {
  return (
    <div className="mTitleBoard">
      <Image src={green_earth} alt={""}></Image>
      <h1 className="title">MOBILE COMBUSTION</h1>
      <p className="scope">Scope 1</p>
    </div>
  );
}
