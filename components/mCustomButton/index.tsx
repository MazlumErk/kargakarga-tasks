interface MCustomButtonProps{
    label:string;
    func: ()=> any;
}

export default function MCustomButton(props: MCustomButtonProps){
    const {label, func} = props;
    return <button className="mCustomButton" onClick={() => func()}>{label}</button>
}