import KCustomButton from "@components/kCustomButton";

export default function KCookie() {
  return (
    <div className="kCookie">
      <p className="cookieExp">
        privacy setting — This site uses third-party website traking
        technologies to provide and continially improve our services. I agree
        and may revoke or change my consent at any time with effect for the
        future. See also our Privacy Policy and Cookies
      </p>
      <KCustomButton />
    </div>
  );
}
