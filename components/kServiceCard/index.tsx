// Next js
import Image, { StaticImageData } from "next/image";


interface KServiceCardProps{
    title: string,
    image: StaticImageData,
    exp: string,
}

export default function KServiceCard(props: KServiceCardProps) {
    const {title, image, exp} = props;
  return (
    <div className="kServiceCard">
      <h2>{title}</h2>
      <Image src={image} alt={""}></Image>
      <p>{exp}</p>
    </div>
  );
}
