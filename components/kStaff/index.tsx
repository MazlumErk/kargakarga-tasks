// components
import KTitle from "@/components/kTitle";
import KStaffCard from "@components/kStaffCard";

// Images
import pp1 from "@images/pp1.png";
import pp2 from "@images/pp2.png";
import pp3 from "@images/pp3.png";
import pp4 from "@images/pp4.png";

const staffs = [
  {
    name: "Mykhailo Kulyk",
    job: "Founder. Designer",
    image: pp1,
  },
  {
    name: "Nikita Borishchenko",
    job: "Chief Ux/Ui designer",
    image: pp2,
  },
  {
    name: "Valeria Lozitskaya",
    job: "Art director of the 3D department",
    image: pp3,
  },
  {
    name: "Khrystyna Pechen",
    job: "Art director of the 2D department",
    image: pp4,
  },
];

export default function KStaff() {
  return (
    <div className="kStaff">
      <div className="titleAndParagraf">
        <KTitle title={"MANCO ART — Ukrainian Game Art Outsourcing Studio"} />
        <p>
          What does it mean? It is simple: we take over the implementation of
          your project in part or in full - from concepts to the finished art
          product. Our company employs a staff of qualified specialists in the
          field of digital drawing.
        </p>
      </div>
      <div className="staffCards">
        {staffs.map((staff, index) => (
          <KStaffCard name={staff.name} image={staff.image} job={staff.job} key={index}/>
        ))}
      </div>
    </div>
  );
}
