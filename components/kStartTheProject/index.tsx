import Image from "next/image";
import KCustomButton from "../kCustomButton";
import KTitle from "../kTitle";

import phn from "@images/phn.png";

export default function KStartTheProject() {
  return (
    <div className="kStartTheProject">
      <div className="buttonAndTitleArea">
        <KTitle
          size={30}
          title={
            "Hey! You can send us a message to start working on the project"
          }
          color="white"
        />
        <div className="btnAndContact">
          <KCustomButton
            color="white"
            bgColor="#294DFA"
            label={"Start the Project"}
            func={function () {
              console.log("Wowww");
            }}
          />
          <p style={{ color: "white" }}>
            Or write to us at: info@kargakarga.com
          </p>
        </div>
      </div>
      <div className="imageArea">
        <Image src={phn} alt={"phone"} className="phone"></Image>
      </div>
    </div>
  );
}
