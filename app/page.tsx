"use client"
import CustomButton from "@/components/customButton/index";

export default function Home() {
  return (
    <main className="home">
      <div className="pages">
        <CustomButton label={"mobile combustıon"} link={"mobile"}></CustomButton>
        <CustomButton label={"KargaKarga Custom Task"} link={"kargakarga"}></CustomButton>
      </div>
      <p>Mazlum Erkek</p>
    </main>
  );
}
