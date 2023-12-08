const Cta = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-16">
        <div className="relative w-fit mx-auto group">
          <div className="absolute group-hover:opacity-100 transition duration-200 blur to-[#8338EC] -inset-0.5 opacity-60 bg-gradient-to-r from-[#3A86FF] rounded-md"></div>
          <div className="relative font-comfortaa text-center text-black text-[14px] font-semibold leading-none mx-auto bg-[#F9F4F5] px-4 py-1 rounded-md">
            short share track
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-500 font-Outfit text-center max-w-3xl mx-auto">
            Elevate your online{" "}
            <span
              style={{
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
              className="bg-gradient-to-r from-[#FFBE0B] to-[#FF006E]">
              presence
            </span>{" "}
            with oue link shortening{" "}
            <span
              style={{
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
              className="bg-gradient-to-r from-[#3A86FF] to-[#8338EC]">
              wizard.
            </span>
          </h1>
          <h2 className="text-gray-600 text-center mx-auto max-w-2xl text-sm font-700 font-comfortaa">
            {" "}
            Unleash the Power of Concise URLs. Elevate your link-sharing
            experience with our user-friendly web app for shortening URLs.
            Simplify, Share, and Track with LinkSwift!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cta;
