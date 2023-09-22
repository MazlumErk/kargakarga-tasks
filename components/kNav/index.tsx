// Components
import KCustomNavButton from "@components/kCustomNavButton";
import KLogo from "@components/kLogo";

const navs = [
  {
    label: "Projects",
    address: "./",
  },
  {
    label: "Services",
    address: "./",
  },
  {
    label: "About Us",
    address: "./",
  },
  {
    label: "Contact Us",
    address: "./",
  },
  {
    label: "Start a Project",
    address: "./",
    bgColor: "#294DFA"
  },
];

export default function KNav() {
  return (
    <div className="kNav">
      {/* Logo */}
      <KLogo label={"kargakarga"} />
      {/* Nav Buttonlar */}
      <div className="navButtons">
        {navs.map((button, index) => (
          <KCustomNavButton label={button.label} address={button.address} key={index} bgColor={button.bgColor}/>
        ))}
      </div>
    </div>
  );
}
