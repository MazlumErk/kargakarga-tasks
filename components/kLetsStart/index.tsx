import KLetsStartForm from "../kLetsStartForm";
import KTitle from "../kTitle";

export default function KLetsStart() {
  return (
    <div className="kLetsStart">
      <div className="letsStartForm">
        <KTitle title={"Let's start your project!"} />
        <p>Leave your contact details and we will contact you</p>
        <KLetsStartForm/>
      </div>
      <div className="galery"></div>
    </div>
  );
}
