interface KTitleProps {
  title: string;
  color?: string;
  size?: number;
}

export default function KTitle(props: KTitleProps) {
  const { title, color, size } = props;
  return <h4 className="kTitle" style={{color: color, fontSize: size}}>{title}</h4>;
}
