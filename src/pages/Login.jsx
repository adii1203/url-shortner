import { Github } from "lucide-react";
import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import { magic } from "../utils/magic";

const Login = () => {
  const handelGoogleLogin = async (provider) => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: provider,
        redirectURI: `${window.location.origin}/register`,
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-screen w-screen relative grid place-content-center  bg-[#111]  ">
      <div className="flex flex-col items-center w-full">
        <div className="w-full sm:w-[22rem] flex flex-col gap-4">
          <div className="w-full flex flex-col gap-4">
            <Button
              onClick={() => handelGoogleLogin("google")}
              varient={"primary"}
              className={
                "w-full justify-center gap-3 py-2 hover:bg-[#eee] hover:text-[#111] capitalize"
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                fill="currentColor"
                className="h-5 w-5">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              continue with google
            </Button>
            <Button
              onClick={() => handelGoogleLogin("github")}
              varient={"primary"}
              className={
                "w-full justify-center gap-3 py-2 hover:bg-[#eee] hover:text-[#111] capitalize"
              }>
              <Github />
              continue with github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
