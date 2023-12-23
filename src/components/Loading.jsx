const Loading = () => {
  return (
    <>
      <div className="w-full mt-5 md:w-[30rem] lg:w-[42rem] mx-auto ">
        <div className="bg-white rounded-md px-2 py-3 shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-300 animate-pulse border rounded-full"></div>
            <div className="">
              <div className=" animate-pulse w-40 h-4 rounded-sm bg-gray-300"></div>
              <div className=" animate-pulse w-60 h-4 mt-2 rounded-sm bg-gray-300"></div>
            </div>
          </div>
          <div className="w-3 h-7 rounded-sm animate-pulse bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
