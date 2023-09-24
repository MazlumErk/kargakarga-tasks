// components
import KServiceCard from "@components/kServiceCard";

// Images
import img1 from "@images/img1.png";
import img2 from "@images/img2.png";
import img3 from "@images/img3.png";
import KParticle from "../kParticle";
import KTitle from "../kTitle";

const cards = [
  {
    title: "Character Design",
    image: img1,
    exp: 'Development of the character "Music teacher"',
  },
  {
    title: "Environment Art",
    image: img2,
    exp: 'Concept art environment for the novel "Capital"',
  },
  {
    title: "2D-illustrations",
    image: img1,
    exp: 'Illustration for the comic "Star Girl"',
  },
  {
    title: "3D-modeling",
    image: img3,
    exp: "3D character concept",
  },
  {
    title: "Book design",
    image: img2,
    exp: 'Design of the book "Red Sands of Durnwood"',
  },
  {
    title: "Ux/Ui design",
    image: img3,
    exp: "Website for art studio “Manco Art”",
  },
  {
    title: "Branding",
    image: img2,
    exp: 'Corporate style "VESPA"',
  },
  {
    title: "NFT-collection",
    image: img1,
    exp: 'NFT collection "Dream"',
  },
];

export default function KOurServices() {
  return (
    <div className="kOurServices">
      <KTitle title={"Our Services"}/>
      <div className="serviceCards">
        {cards.map((card, index) => (
          <KServiceCard title={card.title} image={card.image} exp={card.exp} key={index}/>
        ))}
      </div>
      <KParticle right={10} top={-50}/>
      <KParticle left={10} top={1200}/>
    </div>
  );
}
