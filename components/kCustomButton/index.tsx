interface KCookieProps{
  label: string,
  bgColor?: string,
  color?: string,
  func : () => any,
  type?: any,
}

export default function KCustomButton(props: KCookieProps) {
  const {label, bgColor, color, func, type} = props;

  return (
    <button className="kCustomButton" type={type} style={{backgroundColor: bgColor, color: color}} onClick={() => func()}>{label}</button>
  )
}
