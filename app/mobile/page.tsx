"use client"
// Components
import MFormAndResults from "@/components/mFormAndResults";
import MNav from "@/components/mNav";
import MTitle from "@/components/mTitleBoard";
import UserAlert from "@/components/mUserAlert";

export default function mobile() {
  return (
    <main className="mobile">
      {/* NAvigasyon */}
      <MNav />
      <div className="page">
        {/* Kullanıcı mesajı */}
        <UserAlert />
        {/* Sayfa başlığı */}
        <MTitle />
        {/* Form, sonuçlar ve tablo */}
        <MFormAndResults />
      </div>
    </main>
  );
}
