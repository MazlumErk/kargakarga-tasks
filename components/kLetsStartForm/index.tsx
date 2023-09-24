// Components
import KCustomButton from "../kCustomButton";
// Toast
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function KLetsStartForm() {
    const success = () =>
    toast.success("We gotch you", {
      position: "top-center",
      autoClose: 2000,
    });

  const handleSubmit = async (e: any) => {
    console.log("baş")
    e.preventDefault();
    try {
      const response = await fetch("api/form", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data)
      if (data.success) {
        console.log("hehe")
        success()
      }
    } catch (err) {
        console.log(err)
    }
  };
  return (
    <form
      className="kLetsStartForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="contact"
        id="ccontact"
        placeholder="How can I contact you?"
        className="letsStartInput"
      />
      <input
        type="text"
        name="contact"
        id="ccontact"
        placeholder="Phone/email"
        className="letsStartInput"
      />
      <input
        type="text"
        name="contact"
        id="ccontact"
        placeholder="Add a message"
        className="letsStartInput"
      />
      <div className="checkAndExp">
        <input
          type="checkbox"
          name="check"
          id="check"
          className="letsStartCheck"
        />
        <p>I agree to the processing of personal data.</p>
      </div>
      <KCustomButton
      type={"submit"}
        label={"SEND"}
        func={function () {
          handleSubmit
        }}
      />
      <ToastContainer />
    </form>
  );
}
