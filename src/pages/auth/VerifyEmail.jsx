import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
const VerifyEmail = () => {
  const [searshParams, _] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useeffect run");
    const verifyEmailHandler = async () => {
      try {
        const token = searshParams.get("id");
        const res = await axios.get(
          `http://localhost:5000/api/v1/user/verify-email/${token}`
        );
        console.log(res);
        if (res.data.success) {
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    verifyEmailHandler();
  }, [searshParams]);

  return (
    <div className="grid place-content-center h-screen">
      {loading ? (
        <div className="flex space-x-2 animate-ping">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      ) : (
        <Status success={success} />
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Status = ({ success }) => {
  return (
    <>
      {success ? (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="mx-auto p-4 bg-blue-200/10 rounded-lg outline outline-1 sm:p-7">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#27b452"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-circle-2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="self-start">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    Email Verification
                  </h2>
                  <p className="text-gray-500">Verification Successful</p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>
                    Congratulations! Your email has been verified successfully.
                  </p>
                </div>
                <div className="pt-2 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <Link>login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="mx-auto p-4 bg-blue-200/10 rounded-lg outline outline-1 sm:p-7">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b42727"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x-circle">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <div className="self-start">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    Email Verification
                  </h2>
                  <p className="text-gray-500">Verification Fail</p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>
                    oops! Your email has not been verified successfully. Please
                    try again.
                  </p>
                </div>
                <div className="pt-2 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <Link>login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyEmail;
