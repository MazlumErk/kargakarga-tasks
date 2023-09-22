import Link from "next/link";

interface customButtonProps{
    label : string,
    link : string,
}

export default function CustomButton(props:customButtonProps){
    const {label, link} = props;
    return <Link className="customButton" href={link}>{label}</Link>
}