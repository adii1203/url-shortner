import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { useVerifyEmailQuery } from "../features/auth/authApiSlice";

const Emailverify = () => {
  const { token } = useParams();
  const { data, isLoading } = useVerifyEmailQuery(token);

  return (
    <>
      {isLoading && <p>Verifying email...</p>}
      {data && (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen bg-[#111] text-[#eee] p-4">
            {data?.success === true ? (
              <CheckIcon className="w-16 h-16 text-green-500" />
            ) : (
              <CrossIcon className="w-16 h-16 text-red-500" />
            )}
            <h1 className="text-3xl font-bold mt-4">{data?.message}</h1>
            <p className="text-center mt-2 max-w-md">
              Thank you for verifying your email address. You can now enjoy full
              access to our platform.
            </p>
            <Button varient="primary" className="mt-4 px-12 py-3">
              Continue
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Emailverify;

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
