import Url from "./Url";

const data = [
  {
    id: 1,
    name: "instagram",
    link: "short.sh/adHJ34a",
    img: "https://robohash.org/2401:4900:1ca8:ce6d:c1c2:ed5f:6f59:fd4d.png",
  },
  {
    id: 2,
    name: "facebook",
    link: "short.sh/adHJ34a",
    img: "https://robohash.org/agjdg",
  },
  {
    id: 3,
    name: "twitter",
    link: "short.sh/adHJ34a",
    img: "https://robohash.org/ajf",
  },
  {
    id: 4,
    name: "youtube",
    link: "short.sh/adHJ34a",
    img: "https://robohash.org/455",
  },
  {
    id: 5,
    name: "instagram",
    link: "short.sh/adHJ34a",
    img: "https://robohash.org/98",
  },
  {
    id: 6,
    name: "github",
    link: "short.sh/adHJ34a",
    img: "https://robohash.org/8",
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="flex font-comfortaa items-center justify-between mt-6 relative after:absolute after:h-[1px] after:-bottom-3 after:w-full after:bg-[#D4D4D4] ">
        <div>
          <p className="text-lg font-700">Dashboard</p>
          <p className="text-[#747474] text-[12px] font-500">
            {data.length} links
          </p>
        </div>
        <button className="px-2 py-1 bg-[#9F5FEF] w-[8rem] rounded-full text-white font-700 hover:bg-[#9F5FEF]/90">
          short
        </button>
      </div>
      <div className="mt-10 font-comfortaa flex flex-col gap-4">
        {data.map((urlData) => {
          return (
            <div className="m" key={urlData.id}>
              <Url urlData={urlData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
