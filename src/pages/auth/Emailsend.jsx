import emailImg from "../../assets/email.png";
import { useSearchParams } from "react-router-dom";
const Emailsend = () => {
  const [searchParams, _] = useSearchParams();

  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col gap-4 items-center border-[#100b00] border px-6 py-6 rounded bg-[#ebdedc]/10">
        <img src={emailImg} alt="" />
        <h1 className="font-Outfit font-bold text-2xl ">
          please verify your email
        </h1>
        <div className="font-comfortaa text-sm font-bold">
          <p>we just sent an email to {searchParams.get("email")}.</p>
          <p>click the link in the email to verify your account.</p>
        </div>
        <div>
          <button className="font-Outfit px-4 py-2 rounded-full bg-[#100b00] text-white hover:bg-white hover:text-black hover:outline outline-1 transition-colors duration-300">
            resend email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emailsend;
