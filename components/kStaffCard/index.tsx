// Next js
import Image, { StaticImageData } from "next/image"

interface KStaffCardProps{
    name: string,
    image: StaticImageData,
    job: string,
}


export default function KStaffCard(props: KStaffCardProps) {
    const {name, image, job} = props;
  return (
    <div className="kStaffCard">
        <Image src={image} alt={name}></Image>
        <h4>{name}</h4>
        <p>{job}</p>
    </div>
  )
}
