interface KLogoProps{
    label: string
}

export default function KLogo(props: KLogoProps){
    const {label} = props;
    return <h1 className="kLogo">{label}</h1>
}