// React js
import { useState } from "react";
import { useCookies } from "react-cookie";

// Components
import KCustomButton from "@components/kCustomButton";

interface KCookieProps{
  func : () => any
}

export default function KCookie(props: KCookieProps) {
  const {func} = props;
  // states
  const [isCookieAccept, setIsCookieAccept] = useState();
  const [cookies, setCookie] = useCookies(["Cookie1", "Cookie2"]);
  

  // fonksiyonlar
  const cookiePass = (pass: boolean) => {
    if (pass) {
      setCookie("Cookie1", "Cookie1");
      setCookie("Cookie2", "Cookie2");
    }
    func();
  };
  return (
    <div className="kCookie">
      <p className="cookieExp">
        privacy setting — This site uses third-party website traking
        technologies to provide and continially improve our services. I agree
        and may revoke or change my consent at any time with effect for the
        future. See also our Privacy Policy and Cookies
      </p>
      <KCustomButton
        label={"Deny"}
        func={function () {
          cookiePass(false);
        }}
      />
      <KCustomButton
        label={"Accept"}
        bgColor="white"
        color="#0B1519"
        func={function () {
          cookiePass(true);
        }}
      />
    </div>
  );
}
