import { useState } from "react";
import KFaqCard from "../kFaqCard";

const faqs = [
  {
    que: "What is outsourcing?",
    answ: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
    id: 1,
  },
  {
    que: "What do I need to get started on my project?",
    answ: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
    id: 2,
  },
  {
    que: "How does the process of working on a project work?",
    answ: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
    id: 3,
  },
  {
    que: "Why is it beneficial to outsource the art component?",
    answ: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.",
    id: 4,
  },
];

export default function KFaq() {
  const [selectedFaq, setSelectedFaq] = useState<number>();
  return (
    <div className="kFaq">
      {faqs.map((faq, index) => (
        <KFaqCard
        key={index}
          que={faq.que}
          answ={selectedFaq == index ? faq.answ : ""}
          func={function () {
            setSelectedFaq(index);
          }}
        />
      ))}
    </div>
  );
}
