const Trial = () => {
  return (
    <div className="overflow-hidden w-full relative min-h-screen  bg-white  ">
      <div className="pointer-events-none w-72 h-72 filter blur-2xl mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#ffbb00] absolute animate-blob animation-delay-2000  opacity-20 top-1/3 left-1/3 "></div>
      <div className="pointer-events-none w-80 h-80 filter blur-2xl mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#3A86FF] absolute animate-blob_2 animation-delay-2000 opacity-20 top-24 left-1/4 "></div>
      <div className="pointer-events-none w-72 h-72 filter blur-2xl mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#8338EC] absolute animate-blob animation-delay-400 opacity-20 top-1/3 left-[26rem] "></div>
      <div className="pointer-events-none w-72 h-72 filter blur-2xl mix-blend-multiply dark:mix-blend-normal rounded-full bg-[#FB5607] absolute animate-blob_2 animation-delay-4000 opacity-20 top-20 left-[28rem] lg:left-[40rem] "></div>
    </div>
  );
};

export default Trial;
