// Next js
import Image from "next/image";

// Components
import MNotification from "@/components/mNotification";

// Images
import karakter_erkek from "@images/karakter_erkek.png";

// Icom
import { BsChevronDown } from "react-icons/bs";

export default function UserAlert() {
  return (
    <div className="mUserAlert">
      <MNotification />
      <div className="manImage">
        <Image src={karakter_erkek} alt={""} className="man"></Image>
        <p className="dijitalMentor">Dijital Mentor</p>
        <BsChevronDown></BsChevronDown>
      </div>
      <div className="userMessage">
        <h1 className="name">Merhaba Mazlum Bey,</h1>
        <p className="message">
          Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana
          tıklayarak rapora erişim sağlayabiliriniz.
        </p>
      </div>
    </div>
  );
}
