interface KParticleProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export default function KParticle(props: KParticleProps) {
    const {top, right, bottom, left} = props;
  return <div className="kParticle" style={{top: top, right: right, bottom: bottom, left: left}}></div>;
}
