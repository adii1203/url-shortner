import { useEffect, useState } from "react";
import Button from "../components/ui/Button";

const Emailsent = () => {
  const [resendEmail, setResendEmail] = useState(false);

  useEffect(() => {
    if (resendEmail) {
      // send email
      setTimeout(() => {
        setResendEmail(false);
      }, 5000);
    }
  }, [resendEmail]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#111]  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 font-Outfit">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#eee]">
            Confirm Your Email Address
          </h2>
          <p className="mt-2 text-center text-sm text-[#eee]">
            We've sent a confirmation email to your registered email address.
            Please check your inbox and follow the instructions to confirm your
            email.
          </p>
        </div>
        {/* <div className="mt-5">
          <Button
            onClick={() => setResendEmail(true)}
            disabled={resendEmail}
            varient="primary"
            className="w-full py-2 justify-center hover:bg-[#eee] hover:text-[#111]">
            Resend Email
          </Button>
        </div> */}
      </div>
    </main>
  );
};

export default Emailsent;
