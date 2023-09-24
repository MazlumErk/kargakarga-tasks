// Icons
import { AiOutlinePlus } from "react-icons/ai";

interface KFaqCardProps {
  que: string;
  answ: string;
  func: () => any;
}

export default function KFaqCard(props: KFaqCardProps) {
  const { que, answ, func } = props;
  return (
    <div className="kFaqCard">
      <div className="queAndBtn">
        <h3>{que}</h3>
        <button onClick={() => func()}>
          <AiOutlinePlus/>
        </button>
      </div>
      {answ != "" && <p>{answ}</p>}
    </div>
  );
}
