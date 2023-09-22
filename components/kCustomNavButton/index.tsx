interface KCustomNavButtonProps {
  label: string;
  address: string;
  bgColor?: string;
}

export default function KCustomNavButton(props: KCustomNavButtonProps) {
  const { label, address, bgColor } = props;
  return (
    <button className="kCustomNavButton" style={{backgroundColor: bgColor}} onClick={() => {console.log("aaaaa")}}>
      {label}
    </button>
  );
}
